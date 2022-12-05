import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const Towing = () => {
  const serviceData: Service = {
    title: 'Holowanie',
    price: 100,
    badges: ['przed naprawą'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return (
    <ServiceListItem service={serviceData} textToCopy={'Ryczałt 100 zł za sporządzenie dokumentacji'}></ServiceListItem>
  )
}
