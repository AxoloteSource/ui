import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import React from 'react'

type BannerVariant = 'success' | 'warning'

interface IBannerProps {
  variant?: BannerVariant
  label?: string
  children: React.ReactNode
  className?: string
}

const variantConfig: Record<BannerVariant, { container: string; icon: React.ReactNode }> = {
  success: {
    container: 'bg-green-50 border-green-200 text-green-700',
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-500" />
  }
}

const Banner = ({ variant = 'success', label, children, className = '' }: IBannerProps) => {
  const config = variantConfig[variant]

  return (
    <div className={`flex items-start gap-3 rounded-lg border px-4 py-3 shadow-sm ${config.container} ${className}`}>
      <span className="mt-0.5 shrink-0">{config.icon}</span>
      <div className="min-w-0">
        {label && <p className="text-xs font-semibold tracking-wide uppercase">{label}</p>}
        <p className="mt-0.5 text-sm font-medium text-[var(--text)]">{children}</p>
      </div>
    </div>
  )
}

export default Banner
