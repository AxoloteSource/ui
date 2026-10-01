import Card from '../Card'
import CardTitle from '../Card/partials/CardTitle'
import { ILoyaltyHealthItem, LoyaltyStatus } from '../../interfaces/models/Dashboard/IDashboard'
import { chartColors } from '../../lib/chartColors'

interface LoyaltyHealthCardProps {
  items: ILoyaltyHealthItem[]
  colorByStatus: Record<LoyaltyStatus, string>
}

const LoyaltyHealthCard = ({ items, colorByStatus }: LoyaltyHealthCardProps) => {
  return (
    <Card className="rounded-xl p-5">
      <CardTitle>Salud del programa de lealtad</CardTitle>

      <div className="space-y-5">
        {items.length === 0 && <p className="text-sm text-gray-400 dark:text-gray-500">Sin datos suficientes para este período.</p>}
        {items.map((item) => {
          const statusColor = colorByStatus[item.status] ?? chartColors.primary
          const pct = item.pct ?? 0

          return (
            <div key={item.key}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ color: statusColor, backgroundColor: `${statusColor}1A` }}>
                  {item.status}
                </span>
              </div>
              <div className="mt-1 flex items-end justify-between">
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {item.value.toLocaleString()}
                  {item.total != null && (
                    <span className="text-sm font-normal text-gray-400 dark:text-gray-500"> / {item.total.toLocaleString()}</span>
                  )}
                </span>
                {pct != null && <span className="text-xs text-gray-400 dark:text-gray-500">{pct}%</span>}
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div className="h-full rounded-full" style={{ width: `${Math.min(Math.max(pct, 3), 100)}%`, backgroundColor: statusColor }} />
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default LoyaltyHealthCard
