import Card from '../Card'
import CardTitle from '../Card/partials/CardTitle'
import { IRecentActivity } from '../../interfaces/models/Dashboard/IDashboard'
import { chartColors } from '../../lib/chartColors'
import { Clock, Gift, LucideIcon, ShoppingBag, Ticket, UserPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface RecentActivityProps {
  items: IRecentActivity[]
}

const TYPE_META: Record<IRecentActivity['type'], { icon: LucideIcon; color: string; label: string }> = {
  purchase: { icon: ShoppingBag, color: chartColors.primary, label: 'Compra registrada' },
  points_redeem: { icon: Gift, color: chartColors.warning, label: 'Puntos canjeados' },
  customer_registered: { icon: UserPlus, color: chartColors.info, label: 'Cliente registrado' },
  coupon_redeemed: { icon: Ticket, color: chartColors.success, label: 'Cupón canjeado' }
}

const RecentActivity = ({ items }: RecentActivityProps) => {
  const { t } = useTranslation()
  return (
    <Card className="rounded-xl p-5">
      <CardTitle>Actividad reciente</CardTitle>

      {items.length === 0 ? (
        <p className="text-sm text-gray-400 dark:text-gray-500">{t('no_activity', 'Aún no hay actividad en este período.')}</p>
      ) : (
        <ol className="space-y-4">
          {items.map((item, i) => {
            const meta = TYPE_META[item.type] ?? { icon: Clock, color: chartColors.secondary, label: item.action }
            const Icon = meta.icon
            return (
              <li key={i} className="flex items-start gap-3">
                <span className="rounded-lg p-2" style={{ backgroundColor: `${meta.color}1A`, color: meta.color }}>
                  <Icon size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.action}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {item.user} · {new Date(item.at).toLocaleString()}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </Card>
  )
}

export default RecentActivity
