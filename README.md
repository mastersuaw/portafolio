# mastersuaw — Portfolio

Sitio web estático del desarrollador **mastersuaw**. Portfolio de aplicaciones y sitios web, con páginas legales para publicación en App Store y Google Play.

**URL en producción:** `https://mastersuaw.github.io/portafolio/`

## Proyectos incluidos

- **Anote Domino** — Marcador de dominó (iOS / Android)
- **Creatitek** — E-commerce de sublimación (iOS / Android / Web)
- **Leonida Guia** — Guía no oficial de GTA VI (iOS / Android)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321/portafolio/](http://localhost:4321/portafolio/)

## Build y despliegue en GitHub Pages

1. Asegúrate de que `base` en `astro.config.mjs` coincida con el nombre del repositorio en GitHub (`/portafolio`).
2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que compila el sitio y lo publica automáticamente.
4. El sitio estará disponible en `https://mastersuaw.github.io/portafolio/`.

Para compilar localmente:

```bash
npm run build
```

Esto crea la carpeta `docs/` con los archivos estáticos.

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
