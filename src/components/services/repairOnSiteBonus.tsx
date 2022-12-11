import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const RepairOnSiteBonus = () => {
  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '4'))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  return (
    <ServiceListItem
      cantBeMixedWith={['5', '1', '2']}
      serviceId='4'
      service={{
        active: true,
        badges: ['po naprawie', 'ryczałt'],
        price: 100,
        title: 'Bonus za naprawę na miejscu',
        preventCombineGroup: null,
        serviceType: 'after repair',
      }}
      textToCopy='Bonus 100 zł za naprawę na miejscu'
    />
  )
}
