import { EmojiPicker } from 'frimousse'
import { Smile } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Popover, PopoverContent, PopoverTrigger } from '../../../../ui/popover'
import { useRecentEmojis } from './useRecentEmojis'

interface IEmojiPickerPopoverProps {
  onSelect: (emoji: string) => void
  onClose?: () => void
}

export const EmojiPickerPopover = ({ onSelect, onClose }: IEmojiPickerPopoverProps) => {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const { recentEmojis, addRecentEmoji } = useRecentEmojis()

  const locale = (i18n.language || 'en').split('-')[0]

  const handleEmojiSelect = ({ emoji }: { emoji: string }) => {
    onSelect(emoji)
    addRecentEmoji(emoji)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={t('emojis', 'Emojis')}
          className="hover:text-primary flex size-8 shrink-0 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none"
        >
          <Smile className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        sideOffset={8}
        className="w-[min(340px,calc(100vw-2rem))] overflow-hidden p-0"
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          onClose?.()
        }}
      >
        <EmojiPicker.Root
          locale={locale}
          columns={8}
          onEmojiSelect={handleEmojiSelect}
          className="flex h-[min(420px,70vh)] w-full flex-col bg-[var(--popover)] text-[var(--text)]"
        >
          <EmojiPicker.Search
            aria-label={t('emoji_search', 'Buscar emoji...')}
            placeholder={t('emoji_search', 'Buscar emoji...')}
            className="mx-2 mt-2 appearance-none rounded-md border border-[var(--border)] bg-[var(--input-background)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
          />

          {recentEmojis.length > 0 && (
            <div className="mx-2 mt-2 rounded-md bg-[var(--input-background)] px-2 py-1.5">
              <p className="px-1 pb-1 text-[11px] font-medium text-[var(--text-muted)]">{t('emoji_recent', 'Recientes')}</p>
              <div className="flex flex-wrap gap-0.5">
                {recentEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    aria-label={emoji}
                    title={emoji}
                    onClick={() => handleEmojiSelect({ emoji })}
                    className="flex size-8 items-center justify-center rounded-md text-lg transition-colors hover:bg-[var(--accent)]"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}

          <EmojiPicker.Viewport className="relative mt-1 flex-1 outline-hidden">
            <EmojiPicker.Loading className="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted)]">
              {t('emoji_loading', 'Cargando emojis...')}
            </EmojiPicker.Loading>
            <EmojiPicker.Empty className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-[var(--text-muted)]">
              {t('emoji_no_results', 'No se encontraron emojis')}
            </EmojiPicker.Empty>
            <EmojiPicker.List
              className="pb-1.5 select-none"
              components={{
                CategoryHeader: ({ category, ...props }) => (
                  <div
                    {...props}
                    className="sticky top-0 z-10 bg-[var(--popover)] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[var(--text-muted)] uppercase"
                  >
                    {category.label}
                  </div>
                ),
                Row: ({ children, ...props }) => (
                  <div {...props} className="scroll-my-1">
                    {children}
                  </div>
                ),
                Emoji: ({ emoji, ...props }) => (
                  <button
                    {...props}
                    type="button"
                    title={emoji.label}
                    className="flex size-9 items-center justify-center rounded-md text-xl transition-colors hover:bg-[var(--accent)] data-[active]:bg-[var(--accent)]"
                  >
                    {emoji.emoji}
                  </button>
                )
              }}
            />
          </EmojiPicker.Viewport>

          <div className="flex items-center justify-between gap-2 border-t border-[var(--border)] px-3 py-2">
            <EmojiPicker.ActiveEmoji>
              {({ emoji }) => (
                <span className="truncate pr-2 text-xs text-[var(--text-muted)]">
                  {emoji ? `${emoji.emoji} ${emoji.label}` : t('emoji_select', 'Selecciona un emoji')}
                </span>
              )}
            </EmojiPicker.ActiveEmoji>
            <EmojiPicker.SkinToneSelector
              aria-label={t('emoji_skin_tone', 'Cambiar tono de piel')}
              className="flex size-8 shrink-0 items-center justify-center rounded-md text-lg transition-colors hover:bg-[var(--accent)]"
            />
          </div>
        </EmojiPicker.Root>
      </PopoverContent>
    </Popover>
  )
}
