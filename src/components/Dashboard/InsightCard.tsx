import { IInsight } from '../../interfaces/models/Dashboard/IDashboard'
import { AlertTriangle, CheckCircle, Info, Repeat, TrendingDown, TrendingUp } from 'lucide-react'

interface InsightCardProps {
  insights: IInsight[]
}

const ICONS: Record<string, typeof Info> = {
  never_redeemed: AlertTriangle,
  purchases_up: TrendingUp,
  purchases_down: TrendingDown,
  no_activity: Info,
  strong_repurchase: Repeat,
  all_good: CheckCircle
}

const InsightCard = ({ insights }: InsightCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {insights.map((insight) => {
        const Icon = ICONS[insight.icon] ?? Info
        return (
          <div
            key={insight.id}
            className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800/40"
          >
            <span className="bg-primary/10 text-primary rounded-lg p-2">
              <Icon size={18} />
            </span>
            <p className="text-sm text-gray-700 dark:text-gray-300">{insight.text}</p>
          </div>
        )
      })}
    </div>
  )
}

export default InsightCard
