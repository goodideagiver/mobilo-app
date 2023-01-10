import { useEffect } from 'react'

import { getEuroCourse } from '../../api/getEuroCourse'
import { towBackText } from '../../helpers/outputTextFormatters/towBackText'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

export const TowBack = () => {
  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '5'))
  const distance = useServicesStore((state) => state.settings.distanceAfterRepair)

  const setEuroCourse = useServicesStore((state) => state.setEuroCourse)
  const euroCourse = useServicesStore((state) => state.euroCourse)

  const isActive = towingServiceStore?.active

  useEffect(() => {
    if (!isActive || distance < 50) return

    const minutesSinceLastFetch = (Date.now() - euroCourse.timestamp) / 1000 / 60

    if (minutesSinceLastFetch < 60) return

    const fetch = async () => {
      const data = await getEuroCourse()

      setEuroCourse(data.rate, Date.now())
    }
    fetch()
  }, [euroCourse, isActive, distance])

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
        textToCopy={towBackText(euroCourse.rate, distance)}
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
