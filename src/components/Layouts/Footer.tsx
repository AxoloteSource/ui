import { useAxoloteUI } from '../../contexts/AxoloteUIProvider'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation()
  const { footerLinks = [] } = useAxoloteUI()

  return (
    <div className="dark:text-white-dark mt-auto p-6 pt-0 text-center ltr:sm:text-left rtl:sm:text-right">
      © {new Date().getFullYear()}. {t('brand_name')} {t('reserved_rights')}.{' '}
      {footerLinks.map((link, index) => (
        <span key={`${link.to}-${index}`}>
          {index > 0 && ' | '}
          <Link target="_blank" to={link.to} className="text-primary hover:underline">
            {link.label}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default Footer
