import { ButtonTypeEnum } from '../enums/buttonType.enum'
import { ButtonVariantEnum } from '../enums/buttonVariant.enum'
import { SizeEnum } from '../../../enums/SizeEnum'
import React from 'react'

export interface IUseButtonProps {
  variant: ButtonVariantEnum
  color?: string
  type: ButtonTypeEnum
  className?: string
  to?: string
  disabled?: boolean
  loading?: boolean
  size?: SizeEnum
  children: React.ReactNode
}
