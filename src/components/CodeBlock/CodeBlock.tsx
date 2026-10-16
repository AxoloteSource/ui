import clsx from 'clsx'
import 'highlight.js/styles/monokai-sublime.css'
import ICodeBlockProps from './ICodeBlockProps'
import { useCodeBlock } from './useCodeBlock'

export const CodeBlock = ({
  code,
  language,
  inline = false,
  showLineNumbers = false,
  showLanguage = true,
  showCopyButton = true,
  className = '',
  children,
  theme = 'monokai-sublime'
}: ICodeBlockProps) => {
  const { detectedLanguage, highlightedCode, copied, copyToClipboard } = useCodeBlock({ code, language })

  const themeStyles = {
    'monokai-sublime': '!bg-gray-950 !text-gray-200 dark:!bg-gray-950 dark:!text-gray-200',
    github: '!bg-gray-50 !text-gray-800 dark:!bg-gray-900 dark:!text-gray-200',
    'github-dark': '!bg-gray-900 !text-gray-200 dark:!bg-gray-900 dark:!text-gray-200',
    'atom-one-dark': '!bg-gray-900 !text-gray-200 dark:!bg-gray-900 dark:!text-gray-200',
    'atom-one-light': '!bg-gray-50 !text-gray-800 dark:!bg-gray-900 dark:!text-gray-200'
  }

  const currentTheme = themeStyles[theme] || themeStyles['monokai-sublime']

  if (inline) {
    return (
      <code className={clsx('rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400', className)}>
        {code}
      </code>
    )
  }

  const lines = highlightedCode.split('\n')

  return (
    <div className={clsx('group relative my-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700', className)}>
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 dark:bg-gray-800">
        {showLanguage ? (
          <span className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">{detectedLanguage}</span>
        ) : (
          <span />
        )}

        {showCopyButton && (
          <button
            type="button"
            onClick={copyToClipboard}
            className={clsx(
              'inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium transition-colors',
              copied
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            )}
          >
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Copiado
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
                Copiar
              </>
            )}
          </button>
        )}
      </div>

      {children ?? (
        <pre className={clsx('!mt-0 overflow-x-auto !rounded-none !border-0 text-sm leading-relaxed', currentTheme)}>
          <code className={clsx('hljs', `language-${detectedLanguage}`)}>
            {showLineNumbers
              ? lines.map((line, index) => (
                  <span key={index} className="table-row">
                    <span className="table-cell pr-4 text-right text-gray-400 select-none dark:text-gray-500">{index + 1}</span>
                    <span className="table-cell" dangerouslySetInnerHTML={{ __html: line || ' ' }} />
                  </span>
                ))
              : highlightedCode && <span dangerouslySetInnerHTML={{ __html: highlightedCode }} />}
          </code>
        </pre>
      )}
    </div>
  )
}
