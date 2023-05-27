import { NavDropdown } from 'react-bootstrap'
import LanguageItem from './LanguageItem'
import { useTranslation } from 'react-i18next'

function LanguageSwitch() {
  const { i18n } = useTranslation()

  function changeLocale(locale) {
    i18n.changeLanguage(locale)
  }

  const locales = [
    {
      eventKey: 'bg',
      icon: 'bg',
      title: 'Български',
    },
    {
      eventKey: 'en',
      icon: 'uk',
      title: 'English',
    },
  ]

  const getNavDropdownItems = () => {
    return locales.map(({ eventKey, icon, title }) => {
      return (
        <NavDropdown.Item key={eventKey} eventKey={eventKey} href="#">
          <LanguageItem iso={icon} title={title} />
        </NavDropdown.Item>
      )
    })
  }

  const getSelectedLanguageItem = () => {
    return locales.find(item => item.eventKey === i18n.language)
  }

  return (
    <NavDropdown
      onSelect={changeLocale}
      title={
        <LanguageItem
          iso={getSelectedLanguageItem().icon}
          title={getSelectedLanguageItem().title}
        />
      }
    >
      {getNavDropdownItems()}
    </NavDropdown>
  )
}

export default LanguageSwitch
