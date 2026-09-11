# Casa Amate

Propuesta web bilingüe para Restaurante Casa Amate, construida con Astro y salida estática. La web está preparada para una presentación en Vercel y lleva `noindex` hasta que el restaurante confirme el contenido comercial.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Comprobaciones antes de publicar:

```bash
npm run check
npm run build
npx playwright install chromium webkit
npm run test:e2e
```

## Contenido

- Los datos de contacto, horarios y textos están en `src/data/site.ts`.
- Los platos, traducciones y precios están en `src/data/menu.ts`.
- Las imágenes oficiales están en `src/assets/images`.

Cada precio se guarda una sola vez y se comparte entre español e inglés. Antes de presentar la propuesta como web oficial deben confirmarse con el restaurante la carta, los alérgenos, los horarios, el teléfono, los permisos de uso de imágenes y los datos legales.

## Vercel

Importa el repositorio en Vercel y selecciona esta rama. Vercel detecta Astro automáticamente; el comando de compilación es `npm run build` y la carpeta de salida es `dist`. No hacen falta variables de entorno ni adaptador de servidor.

Cuando el contenido esté aprobado para producción, elimina `public/robots.txt` y cambia la etiqueta `robots` de `src/layouts/BaseLayout.astro` a `index, follow`.

## Fuentes

Consulta [docs/content-sources.md](docs/content-sources.md) para ver las fuentes públicas, las fechas y los puntos que requieren confirmación.
