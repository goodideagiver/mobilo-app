import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

export const DocumentationBonus = () => {
  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '6'))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  const serviceData: Service = {
    title: 'Dokumentacja',
    price: 100,
    badges: ['ryczałt', 'po naprawie'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return (
    <ServiceListItem serviceId='6' service={serviceData} textToCopy='Ryczałt 100 zł za sporządzenie dokumentacji' />
  )
}
