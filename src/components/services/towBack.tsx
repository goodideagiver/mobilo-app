import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const TowBack = () => {
  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '5'))
  const distance = useServicesStore((state) => state.settings.distanceAfterRepair)

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  if (!(distance < 50))
    return (
      <ServiceListItem
        serviceId='5'
        service={{
          active: true,
          badges: ['po naprawie'],
          price: towingServiceStore.price,
          title: 'Odwiezienie pojazdu od 50 km',
          preventCombineGroup: null,
          serviceType: 'after repair',
        }}
        textToCopy={`OPŁATA MANIPULACYJNA = 60,03 EURO NETTO  x KURS 0 = 0,00 zł
OPŁATA ZA ODLEGŁOŚĆ 1,41 EUR/km NETTO X 51 km x KURS 0 = 0,00 zł NETTO
RAZEM = 0,00 ZL NETTO
`}
      />
    )

  return (
    <ServiceListItem
      serviceId='5'
      service={{
        active: true,
        badges: ['po naprawie', 'ryczałt'],
        price: towingServiceStore.price,
        title: 'Odwiezienie pojazdu do 50 km',
        preventCombineGroup: null,
        serviceType: 'after repair',
      }}
      textToCopy='Odwiezienie pojazdu klienta do 50 km 300 zł netto
'
    />
  )
}
