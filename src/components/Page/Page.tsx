import { BreadCrumbles } from '../BreadCrumbles/BreadCrumbles'
import BreadCrumblesItem from '../BreadCrumbles/BreadCrumblesItems/BreadCrumblesItem'
import { IPageProps } from './IPageProsp'
import Typography from '../Typography'
import { TypographyVariantEnum } from '../Typography/enums/typographyVariant.enum'
import { useTranslation } from 'react-i18next'

export const Page = ({ children, title, titleTranslation, helpDescription, headerAction, breadCrumblesItems, className }: IPageProps) => {
  const { t } = useTranslation()

  return (
    <div className={className}>
      {breadCrumblesItems?.length && (
        <BreadCrumbles className="mb-1">
          {breadCrumblesItems?.map((item, index) => (
            <BreadCrumblesItem key={index} to={item.to} className={item.className}>
              {typeof item.children === 'string' ? t(item.children) : item.children}
            </BreadCrumblesItem>
          ))}
        </BreadCrumbles>
      )}

      {(title || titleTranslation || helpDescription || headerAction) && (
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-start">
            {title ? (
              <Typography variant={TypographyVariantEnum.H2} className="font-bold">
                {title}
              </Typography>
            ) : (
              titleTranslation && (
                <Typography variant={TypographyVariantEnum.H2} className="font-bold">
                  {t(titleTranslation).charAt(0).toUpperCase() + t(titleTranslation).slice(1)}
                </Typography>
              )
            )}
            {helpDescription && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{typeof helpDescription === 'string' ? t(helpDescription) : helpDescription}</p>
            )}
          </div>
          {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
        </div>
      )}

      {children}
    </div>
  )
}
