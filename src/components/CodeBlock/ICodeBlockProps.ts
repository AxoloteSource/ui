import type { ReactNode } from 'react'

export type CodeBlockTheme = 'monokai-sublime' | 'github' | 'github-dark' | 'atom-one-dark' | 'atom-one-light'

interface ICodeBlockProps {
  /** Código a mostrar */
  code: string

  /** Lenguaje del código (javascript, php, bash, etc.) */
  language?: string

  /** Si es inline, se muestra como <code> en lugar de bloque */
  inline?: boolean

  /** Muestra números de línea */
  showLineNumbers?: boolean

  /** Muestra el badge con el nombre del lenguaje */
  showLanguage?: boolean

  /** Muestra el botón de copiar */
  showCopyButton?: boolean

  /** Clases CSS adicionales */
  className?: string

  /** Contenido personalizado opcional (si se pasa, reemplaza el render del código) */
  children?: ReactNode

  /** Tema de highlight.js */
  theme?: CodeBlockTheme
}

export default ICodeBlockProps
