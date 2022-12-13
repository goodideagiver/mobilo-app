import { getEuroCourse } from '../../api/getEuroCourse'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { towBackText } from '../../helpers/outputTextFormatters/towBackText'

export const TowBack = () => {
  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '5'))
  const distance = useServicesStore((state) => state.settings.distanceAfterRepair)

  const setEuroCourse = useServicesStore((state) => state.setEuroCourse)

  const isActive = towingServiceStore?.active

  const { data, isFetching, error, isLoading } = useQuery({
    queryKey: 'euroRate',
    cacheTime: 1000 * 60 * 60,
    queryFn: () => getEuroCourse(),
  })

  useEffect(() => {
    setEuroCourse(data?.rate)
  }, [data?.rate])

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
        textToCopy={towBackText(data?.rate, distance)}
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
