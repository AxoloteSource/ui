import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path, { resolve } from 'node:path'
import ts from 'typescript'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

function isTypeOnlyFile(filePath: string): boolean {
  const source = fs.readFileSync(filePath, 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ESNext
    },
    fileName: filePath
  })

  return (
    outputText
      .replace(/\/\/# sourceMappingURL=.*$/gm, '')
      .replace(/export\s*\{\s*\};?/g, '')
      .trim().length === 0
  )
}

function collectEntries(dir: string, base = dir): Record<string, string> {
  const entries: Record<string, string> = {}

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      Object.assign(entries, collectEntries(full, base))
      continue
    }

    if (
      !/\.(ts|tsx)$/.test(entry.name) ||
      /\.(test|spec)\./.test(entry.name) ||
      /\.d\.ts$/.test(entry.name)
    ) {
      continue
    }

    if (isTypeOnlyFile(full)) {
      continue
    }

    const name = path.relative(base, full).replace(/\.(ts|tsx)$/, '')

    const normalized = path.basename(name) === 'index' ? path.dirname(name) : name
    entries[normalized === '.' ? 'index' : normalized] = full
  }

  return entries
}

export default defineConfig(({ mode }) => {
  const typesOnly = mode === 'types'
  const entries = collectEntries(resolve(__dirname, 'src'))

  return {
    plugins: [
      react(),
      ...(typesOnly
        ? [
            dts({
              tsconfigPath: './tsconfig.json',
              include: ['src'],
              exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
              declarationOnly: true
            })
          ]
        : [])
    ],
    resolve: {
      alias: {
        '@axolotesource/ui': resolve(__dirname, 'src/index.ts'),
        '@axolotesource/ui/': resolve(__dirname, 'src') + '/'
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: !typesOnly,
      lib: {
        entry: entries,
        formats: ['es']
      },
      rollupOptions: {
        preserveEntrySignatures: 'strict',
        external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('@axolotesource/ui'),
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          assetFileNames: '[name][extname]'
        }
      },
      chunkSizeWarningLimit: 2000
    }
  }
})
