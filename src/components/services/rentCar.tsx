import { Select } from '@chakra-ui/react'
import { rentCars } from '../../store/servicesStore/rentCars'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const RentCar = () => {
  const rentCarServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '2'))

  const isActive = rentCarServiceStore?.active

  if (!isActive) return null

  return (
    <ServiceListItem
      service={{
        active: true,
        badges: ['przed naprawą'],
        price: 100,
        title: 'Auto zastępcze',
        preventCombineGroup: null,
        serviceType: 'before repair',
      }}
      textToCopy={`KLASA A AUTO ZASTĘPCZE NA 12 DNI X STAWKA 240 zł netto za dobę = 2880 zł
`}
    >
      <Select flex={'0 0 400px'} placeholder="Wybierz model">
        {rentCars.map((car) => (
          <option key={car.name} value={car.name}>
            {car.name}
          </option>
        ))}
      </Select>
    </ServiceListItem>
  )
}
