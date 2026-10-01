import Card from '../Card'
import { Tooltip } from '../Tooltip/Tooltip'
import { IKpi } from '../../interfaces/models/Dashboard/IDashboard'
import {
  ArrowDownRight,
  ArrowUpRight,
  Info,
  LucideIcon,
  Minus,
  MinusCircle,
  PlusCircle,
  ShoppingBag,
  Ticket,
  UserCheck,
  UserPlus,
  Users
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  shopping_bag: ShoppingBag,
  users: Users,
  user_check: UserCheck,
  user_plus: UserPlus,
  plus_circle: PlusCircle,
  minus_circle: MinusCircle,
  ticket: Ticket
}

interface KpiCardVM extends IKpi {
  color: string
}

interface KpiCardProps {
  kpi: KpiCardVM
}

const KpiCard = ({ kpi }: KpiCardProps) => {
  const isUp = kpi.trend === 'up'
  const isDown = kpi.trend === 'down'
  const trendColor = isUp
    ? 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10'
    : isDown
      ? 'text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-500/10'
      : 'text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800'
  const TrendIcon = isUp ? ArrowUpRight : isDown ? ArrowDownRight : Minus
  const Icon = ICONS[kpi.icon] ?? ShoppingBag

  return (
    <Card className="rounded-xl p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="flex items-center gap-1 truncate text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-400">
            {kpi.info && (
              <Tooltip content={kpi.info} placement="top">
                <Info size={13} className="flex-shrink-0 cursor-help" />
              </Tooltip>
            )}
            {kpi.label}
          </p>
          <p className="mt-1 text-xl font-bold text-gray-900 sm:mt-2 sm:text-2xl dark:text-gray-100">{kpi.value.toLocaleString()}</p>
        </div>
        <span className="flex-shrink-0 rounded-lg p-2 sm:p-2.5" style={{ backgroundColor: `${kpi.color}1A`, color: kpi.color }}>
          <Icon size={18} className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs sm:mt-3">
        <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 font-semibold sm:px-2 sm:py-1 ${trendColor}`}>
          <TrendIcon size={12} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          {Math.abs(kpi.delta_pct).toFixed(1)}%
        </span>
        <span className="truncate text-gray-400 dark:text-gray-500">vs anterior</span>
      </div>
    </Card>
  )
}

export default KpiCard
