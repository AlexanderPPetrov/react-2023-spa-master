import HomePageCarousel from '../components/HomePageCarousel'
import PageSection from '../components/PageSection'
import ServiceItemList from '../components/ServiceItemList'
import { useTranslation } from 'react-i18next'

function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12">
          <HomePageCarousel />
        </div>
        <div className="col-12">
          <PageSection
            title={t('homePage.mainSectionTitle')}
            description={t('homePage.mainSectionDescription')}
          />
        </div>
        <ServiceItemList />
      </div>
    </div>
  )
}

export default HomePage
