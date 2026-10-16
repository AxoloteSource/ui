import { UserRound } from 'lucide-react'

import { IStatus, useAvatar } from './useAvatar'

interface IAvatarProps {
  status?: IStatus
  imagePath?: string
  className?: string
}

export const Avatar = ({ status, imagePath, className = '' }: IAvatarProps) => {
  const { avatarStatus } = useAvatar({ status: status ?? null })
  return (
    <>
      <div className="relative flex-none">
        {imagePath ? (
          <img src={imagePath} className={`h-10 w-10 rounded-full object-cover transition-all duration-300 ${className ?? ''}`} />
        ) : (
          <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition-all duration-300 ${className ?? ''}`}>
            <UserRound className="h-6 w-6" />
          </div>
        )}
        {status && (
          <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
            <div className={`${avatarStatus} h-4 w-4 rounded-full`}></div>
          </div>
        )}
      </div>
    </>
  )
}
