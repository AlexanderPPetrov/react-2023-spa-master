import ServiceItem from "./ServiceItem"
import { useTranslation } from "react-i18next"
import { FiPhoneCall } from 'react-icons/fi'
import { IoInformationCircleOutline } from 'react-icons/io5'
import { GiMedicines } from 'react-icons/gi'


function ServiceItemList() {

  const { t } = useTranslation();  

  const serviceItems = [
    {
      icon: <IoInformationCircleOutline size="4rem"/>,
      title: t('services.aboutTitle'),
      description: t('services.aboutDescription'),
    },
    {
      icon: <GiMedicines size="4rem"/>,
      title: t('services.serviceTitle'),
      description: t('services.serviceDescription'),
    },
    {
      icon: <FiPhoneCall size="4rem"/>,
      title: t('services.contactTitle'),
      description: t('services.contactDescription'),
    },
  ]
  const getServiceItems = () => {
    return serviceItems.map((item, index) => {
      return <div key={index} className="col-md-4">
          <ServiceItem 
            icon={item.icon} 
            title={item.title}
            description={item.description}
        />
      </div>
   
    })
  }

  return <>
   {getServiceItems()}
  </>
}

export default ServiceItemList;