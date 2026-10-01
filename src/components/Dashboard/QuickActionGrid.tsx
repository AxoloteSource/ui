import Button from '../Buttons/Button'
import { ButtonVariantEnum } from '../Buttons/enums/buttonVariant.enum'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface QuickAction {
  label: string
  icon: LucideIcon
  onClick: () => void
}

interface QuickActionGridProps {
  actions: QuickAction[]
  renderModals?: ReactNode
}

const QuickActionGrid = ({ actions, renderModals }: QuickActionGridProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {actions.map(({ label, icon: Icon, onClick }) => (
          <Button
            key={label}
            variant={ButtonVariantEnum.Outline}
            onClick={onClick}
            className="flex flex-col items-center justify-center gap-2 rounded-xl py-5 text-gray-700 dark:text-gray-300"
          >
            <Icon size={22} />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        ))}
      </div>

      {renderModals}
    </>
  )
}

export default QuickActionGrid
