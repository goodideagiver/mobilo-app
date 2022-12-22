import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'
import { towingText } from './towing.helpers'

type Props = {
  serviceId: string
}

export const Towing = ({ serviceId }: Props) => {
  const { distanceBeforeRepair, vehicleWeight } = useServicesStore((state) => state.settings)

  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === serviceId))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  const textToCopy = towingText(vehicleWeight, distanceBeforeRepair)

  const serviceData: Service = {
    title: 'Holowanie',
    price: towingServiceStore.price,
    badges: ['przed naprawą'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return (
    <ServiceListItem cantBeMixedWith={['3', '4']} serviceId={serviceId} service={serviceData} textToCopy={textToCopy} />
  )
}
