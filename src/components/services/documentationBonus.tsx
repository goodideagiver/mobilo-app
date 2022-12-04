import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const DocumentationBonus = () => {
  const serviceData: Service = {
    title: 'Dokumentacja',
    price: 100,
    badges: ['ryczałt', 'po naprawie'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return <ServiceListItem service={serviceData} textToCopy="Ryczałt 100 zł za sporządzenie dokumentacji" />
}
