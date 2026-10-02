import hightlight from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { PropsWithChildren, useEffect, useRef } from 'react'

const CodeHighlight = ({ children }: PropsWithChildren) => {
  const highlightElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pre = highlightElement.current?.querySelector('pre')
    if (pre) {
      hightlight.highlightElement(pre)
    }
  }, [])

  return (
    <div ref={highlightElement} className="highlight-el">
      {children}
    </div>
  )
}

export default CodeHighlight
