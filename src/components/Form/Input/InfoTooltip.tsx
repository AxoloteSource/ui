import { Tooltip } from '../../Tooltip/Tooltip'
import { Info } from 'lucide-react'

interface InfoTooltipProps {
  content: string
  size?: number
}

export const InfoTooltip = ({ content, size = 13 }: InfoTooltipProps) => {
  return (
    <Tooltip content={content} placement="top">
      <Info size={size} className="flex-shrink-0 cursor-help" />
    </Tooltip>
  )
}
