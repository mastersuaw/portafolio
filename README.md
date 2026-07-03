# mastersuaw — Portfolio

Sitio web estático del desarrollador **mastersuaw**. Portfolio de aplicaciones y sitios web, con páginas legales para publicación en App Store y Google Play.

**URL en producción:** `https://mastersuaw.github.io/mastersuaw-portfolio/`

## Proyectos incluidos

- **Anote Domino** — Marcador de dominó (iOS / Android)
- **Creatitek** — E-commerce de sublimación (iOS / Android / Web)
- **Leonida Guia** — Guía no oficial de GTA VI (iOS / Android)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321/mastersuaw-portfolio/](http://localhost:4321/mastersuaw-portfolio/)

## Build y despliegue en GitHub Pages

1. Asegúrate de que `base` en `astro.config.mjs` coincida con el nombre del repositorio en GitHub (`/mastersuaw-portfolio`).
2. Genera el sitio estático:

```bash
npm run build
```

Esto crea la carpeta `docs/` con los archivos listos para GitHub Pages.

3. Sube el repositorio a GitHub (incluyendo la carpeta `docs/`).
4. En GitHub: **Settings → Pages → Source: Deploy from branch `main` → Folder `/docs`**.
5. El sitio estará disponible en `https://mastersuaw.github.io/mastersuaw-portfolio/`.

## Agregar una nueva app

1. Añade la entrada en `src/data/projects.ts`.
2. Copia el icono a `public/images/apps/<slug>.png`.
3. Crea la página en `src/pages/apps/<slug>.astro`.
4. Si necesita páginas legales propias, créalas en `src/pages/legal/<slug>/`.
5. Ejecuta `npm run build` y sube los cambios.

## Estructura

```
src/
├── components/     # Componentes reutilizables
├── data/           # Catálogo de proyectos
├── layouts/        # Layout base
├── pages/          # Rutas del sitio
└── styles/         # CSS global
public/             # Assets estáticos (iconos, imágenes)
docs/               # Build generado (GitHub Pages)
```

## Tecnologías

- [Astro 7](https://astro.build) — Sitio estático
- TypeScript strict
- CSS puro (sin frameworks UI)

## Licencia

© mastersuaw. Todos los derechos reservados.
