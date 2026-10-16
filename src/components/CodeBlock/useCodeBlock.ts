import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import php from 'highlight.js/lib/languages/php'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import { useEffect, useState } from 'react'

const LANGUAGES = ['bash', 'css', 'javascript', 'json', 'php', 'typescript', 'xml']

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('php', php)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

interface UseCodeBlockParams {
  code: string
  language?: string
}

export const useCodeBlock = ({ code, language }: UseCodeBlockParams) => {
  const [copied, setCopied] = useState(false)

  const isSupportedLanguage = language ? LANGUAGES.includes(language) : false

  const detectedLanguage = isSupportedLanguage ? language : (hljs.highlightAuto(code).language ?? 'plaintext')

  const highlightedCode = isSupportedLanguage ? hljs.highlight(code, { language: language as string }).value : hljs.highlightAuto(code).value

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }
  }

  return {
    detectedLanguage,
    highlightedCode,
    copied,
    copyToClipboard
  }
}
