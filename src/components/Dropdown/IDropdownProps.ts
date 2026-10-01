import { DropdownVariantEnum } from './DropdownVariantEnum'
import React from 'react'

export interface IDropdownProps {
  className?: string
  variant?: DropdownVariantEnum
  color?: string
  children: React.ReactNode
  title: string
}
