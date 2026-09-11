import { expect, test } from '@playwright/test';

const routes = [
  { path: '/', lang: 'es', heading: 'Casa Amate' },
  { path: '/carta/', lang: 'es', heading: 'La carta' },
  { path: '/en/', lang: 'en', heading: 'Casa Amate' },
  { path: '/en/menu/', lang: 'en', heading: 'The menu' },
] as const;

for (const route of routes) {
  test(`${route.path} renders the correct language`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('html')).toHaveAttribute('lang', route.lang);
    await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });
}

test('language links preserve the equivalent page', async ({ page }) => {
  await page.goto('/carta/');
  await expect(page.getByRole('link', { name: 'Ver en inglés' })).toHaveAttribute('href', '/en/menu/');
  await page.goto('/en/');
  await expect(page.getByRole('link', { name: 'Ver en español' })).toHaveAttribute('href', '/');
});

test('menu remains available without client-side JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/carta/');
  await expect(page.getByText('Pan bao de secreto de cerdo')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Para los golosos' })).toBeVisible();
  await context.close();
});

test('reservation and maps links are correct', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Reservar: llamar a Casa Amate' }).first()).toHaveAttribute('href', 'tel:+34953023576');
  const directions = page.getByRole('link', { name: /Cómo llegar/ });
  await expect(directions).toHaveAttribute('href', /google\.com\/maps\/place\/Restaurante\+Casa\+Amate/);
});

for (const viewport of [
  { width: 320, height: 800 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
]) {
  test(`layout fits ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/carta/');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    if (viewport.width < 768) {
      const bar = page.locator('.mobile-bar');
      await expect(bar).toBeVisible();
      const box = await bar.boundingBox();
      expect(box).not.toBeNull();
      expect(Math.ceil((box?.y ?? 0) + (box?.height ?? 0))).toBeLessThanOrEqual(viewport.height + 1);
    }
  });
}

test('reduced motion disables smooth scrolling', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const behavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  expect(behavior).toBe('auto');
});
