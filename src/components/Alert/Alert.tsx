import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children: ReactNode
  className?: string
}

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle
}

const colorMap = {
  info: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
  success: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200',
  warning: 'border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200',
  error: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200'
}

const Alert = ({ type = 'info', title, children, className }: AlertProps) => {
  const Icon = iconMap[type]

  return (
    <div className={cn('flex items-start gap-3 rounded-lg border-l-4 p-4', colorMap[type], className)}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  )
}

export default Alert
