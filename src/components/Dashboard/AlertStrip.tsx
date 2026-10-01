import { IAlert } from '../../interfaces/models/Dashboard/IDashboard'
import { chartColors } from '../../lib/chartColors'
import { AlertTriangle, Info, ShieldAlert } from 'lucide-react'

interface AlertStripProps {
  alerts: IAlert[]
}

const severityStyle: Record<IAlert['severity'], { icon: typeof Info; color: string }> = {
  info: { icon: Info, color: chartColors.info },
  warning: { icon: AlertTriangle, color: chartColors.warning },
  danger: { icon: ShieldAlert, color: chartColors.danger }
}

const AlertStrip = ({ alerts }: AlertStripProps) => {
  if (alerts.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300">
        <span className="rounded-full bg-emerald-100 p-1.5 dark:bg-emerald-500/20">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span className="text-sm font-medium">Todo funciona correctamente.</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {alerts.map((alert) => {
        const { icon, color } = severityStyle[alert.severity]
        const Icon = icon
        return (
          <div
            key={alert.type}
            className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800/40"
          >
            <span className="rounded-lg p-2" style={{ backgroundColor: `${color}1A`, color }}>
              <Icon size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{alert.message}</p>
              {alert.link && (
                <a href={alert.link} className="text-primary text-xs font-medium hover:underline">
                  Ver detalle
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AlertStrip
