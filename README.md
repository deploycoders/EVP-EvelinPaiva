# EVP - Evelin Paiva (React + Tailwind)

Landing base construida con **React (JavaScript)**, **Vite** y **Tailwind CSS**, organizada por secciones reutilizables y lista para escalar.

## Stack

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS 3 + PostCSS + Autoprefixer

## Paleta de Colores (Brand)

Definida en `tailwind.config.js` dentro de `theme.extend.colors.evp`.

- `evp.bg`: `#F7F3F0`
- `evp.section`: `#EFE9E4`
- `evp.accent`: `#AD5D43`
- `evp.accent-deep`: `#8A4833`
- `evp.title`: `#1A1A1A`
- `evp.body`: `#575757`
- `evp.border`: `#D9C5B2`

## Estructura del Proyecto

```txt
.
├─ src/
│  ├─ app/
│  │  ├─ layout/
│  │  └─ router/
│  ├─ components/
│  │  ├─ common/
│  │  └─ layout/
│  ├─ data/
│  ├─ pages/
│  ├─ sections/
│  └─ styles/
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Requisitos

- Node.js 20+ (recomendado 22)
- npm 10+

## Instalación y Ejecución

```bash
npm install
npm run dev
```

Aplicación local: `http://localhost:5173`

## Scripts Disponibles

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar build local
```

## Configuración Tailwind

- Archivo principal: `src/styles/tailwind.css`
- Configuración theme: `tailwind.config.js`
- Clases personalizadas por componente en JSX
- Clase reutilizable de secciones: `section-shell`

## Rutas

Definidas en `src/app/router/AppRouter.jsx`.

- `/` -> Home
- `/inicio` -> redirige a `/`
- `*` -> NotFound

## Secciones Iniciales

- Hero
- Sobre mí
- Servicios
- Portafolio
- Testimonios
- Contacto

Todas están en `src/sections/*` y listas para reemplazar contenido.

## Variables de Entorno

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

2. Ajusta valores según tu entorno.

## Subir a tu repositorio GitHub

Si es un repo nuevo:

```bash
git init
git add .
git commit -m "feat: initial React + Tailwind EVP structure"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Si ya existe remoto y solo quieres actualizar:

```bash
git add .
git commit -m "chore: project setup and docs"
git push
```

## Build de Producción

```bash
npm run build
```

Salida generada en `dist/`.

## Notas

- `node_modules/` y `dist/` están ignorados por Git.
- El proyecto está en JavaScript (sin TypeScript), como solicitaste.
- Puedes extender el tema en `tailwind.config.js` sin romper la estructura actual.
