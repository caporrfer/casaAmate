# Casa Amate

Borrador de la web de Restaurante Casa Amate, pensado primero para móvil y preparado como sitio estático con Astro.

> Esta versión es una propuesta para presentar al restaurante. La carta, precios, horarios, teléfono, fotografías y textos deben validarse con los propietarios antes de publicar la web oficial.

## Desarrollo

Necesitas Node.js 24 o una versión LTS compatible.

```bash
npm install
npm run dev
```

La terminal mostrará la dirección local. Para comprobar y generar la versión publicable:

```bash
npm run validate
```

El resultado estático queda en `dist/` y puede alojarse en cualquier proveedor de páginas estáticas.

## Actualizar contenidos

- Datos de contacto y horarios: `src/data/site.ts`.
- Carta bilingüe y precios: `src/data/menu.ts`.
- Selección de la galería: `src/data/gallery.ts`.
- Fotografías: `src/assets/images/`.

Cada plato usa una única lista de precios compartida por español e inglés. Los campos `source` y `provisional` documentan internamente el origen y el estado del contenido. No se publican alérgenos porque no existe una fuente validada.

## Fuentes del borrador

Las fotografías proceden de los perfiles públicos de [Instagram](https://www.instagram.com/restaurantecasamate/) y [Facebook](https://www.facebook.com/restaurantecasamate). Algunos platos se identificaron también mediante las fichas públicas del restaurante y reseñas. Los nombres descriptivos y precios que no aparecen en una fuente verificable son ejemplos autorizados para este borrador.

## Antes de producción

1. Confirmar por escrito el derecho a reutilizar las fotografías descargadas de las redes del restaurante.
2. Validar todos los platos, descripciones, precios, horarios y el teléfono de reservas.
3. Añadir información legal y de alérgenos facilitada por el restaurante.
4. Retirar los avisos de borrador, cambiar `noindex` y actualizar `public/robots.txt`.
5. Configurar el dominio definitivo y revisar la analítica o el aviso de cookies solo si se incorporan esos servicios.
