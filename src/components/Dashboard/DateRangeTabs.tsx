import { DASHBOARD_RANGE_OPTIONS, DashboardRangeKey } from '../../interfaces/models/Dashboard/IDashboard'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface DateRangeTabsProps {
  range: DashboardRangeKey
  onChange: (next: DashboardRangeKey, from?: string, to?: string) => void
}

const DateRangeTabs = ({ range, onChange }: DateRangeTabsProps) => {
  const { t } = useTranslation()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const applyCustom = () => {
    if (from && to) onChange('custom', from, to)
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        {DASHBOARD_RANGE_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              range === opt.key
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {t(opt.key, opt.label)}
          </button>
        ))}
      </div>

      {range === 'custom' && (
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          />
          <span className="text-gray-400 dark:text-gray-500">–</span>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          />
          <button type="button" onClick={applyCustom} className="bg-primary rounded-md px-3 py-1.5 text-sm font-medium text-white">
            {t('apply', 'Aplicar')}
          </button>
        </div>
      )}
    </div>
  )
}

export default DateRangeTabs
