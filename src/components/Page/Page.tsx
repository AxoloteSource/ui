import { BreadCrumbles } from '../BreadCrumbles/BreadCrumbles'
import BreadCrumblesItem from '../BreadCrumbles/BreadCrumblesItems/BreadCrumblesItem'
import { IPageProps } from './IPageProsp'
import Typography from '../Typography'
import { TypographyVariantEnum } from '../Typography/enums/typographyVariant.enum'
import { useTranslation } from 'react-i18next'

export const Page = ({ children, titleTranslation, breadCrumblesItems }: IPageProps) => {
  const { t } = useTranslation()

  return (
    <>
      {breadCrumblesItems?.length && (
        <BreadCrumbles className="mb-1">
          {breadCrumblesItems?.map((item, index) => (
            <BreadCrumblesItem key={index} to={item.to} className={item.className}>
              {typeof item.children === 'string' ? t(item.children) : item.children}
            </BreadCrumblesItem>
          ))}
        </BreadCrumbles>
      )}

      {titleTranslation && (
        <div className="mb-4 flex hidden items-center justify-between sm:block">
          <Typography variant={TypographyVariantEnum.H2} className="font-bold">
            {t(titleTranslation).charAt(0).toUpperCase() + t(titleTranslation).slice(1)}
          </Typography>
        </div>
      )}

      {children}
    </>
  )
}
