# 🦎 @axolotesource/ui

Librería de componentes **React + TypeScript** reutilizables de AxoloteSource (formularios, tablas, modales, layouts, UI shadcn, etc.).

- Repositorio: https://github.com/AxoloteSource/ui
- Paquete: `@axolotesource/ui`
- Distribución: dependencia **Git** (tarball con `dist/` ya compilado) + alias local para desarrollo.

---

## 📑 Índice

- [Requisitos](#-requisitos)
- [Desarrollo de la librería](#-desarrollo-de-la-librería)
- [Build](#-build)
- [Uso en un proyecto (consumidor)](#-uso-en-un-proyecto-consumidor)
- [Local vs Producción](#-local-vs-producción)
- [Publicación / distribución](#-publicación--distribución)
- [Scripts](#-scripts)

---

## 🛠 Requisitos

- Node.js 20+
- pnpm 11+
- React 19 (peer)

---

## 💻 Desarrollo de la librería

```bash
pnpm install
pnpm dev      # vite build --watch (rebuild continuo de dist/)
```

Componentes en `src/components/*`, primitivas en `src/hooks`, `src/enums`, `src/lib`, `src/contexts`. Los estilos viven en `src/styles/index.css` (tokens, capas y `@source`).

---

## 📦 Build

```bash
pnpm install
pnpm build    # compila a dist/ (JS + .d.ts), preservando la estructura de src/
```

- El build usa `preserveModules`, así que `dist/` espeja `src/` y soporta imports profundos (`@axolotesource/ui/components/Buttons/Button`).
- `dist/` está **commiteado** en el repo para que los consumidores por Git no necesiten compilar.

---

## 🔌 Uso en un proyecto (consumidor)

1. Instala la dependencia (repo público, sin token):

```bash
pnpm add github:AxoloteSource/ui#main
# o una versión fija:
pnpm add github:AxoloteSource/ui#v0.1.0
```

2. Instala los **peers**:

```bash
pnpm add react react-dom react-router-dom react-i18next i18next @tanstack/react-query
```

3. Importa los estilos y los componentes:

```css
/* tu CSS de entrada de Tailwind v4 */
@import 'tailwindcss';
@import '@axolotesource/ui/styles.css';
```

```tsx
import Button from '@axolotesource/ui/components/Buttons/Button'
import { Input } from '@axolotesource/ui/components/Form/Input'
import { cn } from '@axolotesource/ui/lib/utils'
```

> `styles.css` incluye un `@source` interno que registra los archivos de la librería para que Tailwind genere sus utilidades automáticamente. No necesitas configurar rutas locales.

---

## 🧪 Local vs Producción

**Desarrollo local (editando la librería en vivo):** en el proyecto consumidor, apunta `@axolotesource/ui` al directorio local mediante alias de Vite/TypeScript. No requiere rebuild; los cambios de JS y CSS se reflejan al instante.

```bash
# en el proyecto consumidor
pnpm lib:local   # @axolotesource/ui -> link:../axolote-ui
pnpm run dev
```

**Producción:** instala desde Git y compila normalmente.

```bash
pnpm lib:prod                  # @axolotesource/ui -> github:AxoloteSource/ui#main
pnpm install --frozen-lockfile
pnpm run build
```

---

## 🚀 Publicación / distribución

La distribución actual es por **Git dependency**. Para publicar cambios:

```bash
pnpm install
pnpm build                                   # regenera dist/
git add -A
git commit -m "build: update dist"
git push origin main
```

Los consumidores actualizan con:

```bash
pnpm update @axolotesource/ui
```

> Alternativa (opcional): publicar a **GitHub Packages** con `publishConfig.registry` (ya configurado) y `.npmrc` con `GITHUB_TOKEN`. GitHub Packages exige PAT para instalar incluso en repos públicos, por eso el flujo recomendado es Git.

---

## 🧩 Scripts

| Script                | Descripción                                        |
|:----------------------|:---------------------------------------------------|
| `pnpm dev`            | Build en modo watch (`vite build --watch`).        |
| `pnpm build`          | Compila `dist/` (JS + declaraciones).              |
| `pnpm types`          | Chequeo de tipos con `tsc --noEmit`.               |
| `pnpm lint`           | ESLint con autofix.                                |
| `pnpm format`         | Prettier sobre `src/`.                             |
| `pnpm prepublishOnly` | Se ejecuta antes de publicar (corre `build`).      |
