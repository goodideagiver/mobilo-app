import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { rentCars } from '../../store/servicesStore/rentCars'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const RentCar = () => {
  const rentCarServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '2'))

  const isActive = rentCarServiceStore?.active

  if (!isActive) return null

  const daysInputHandler = () => {}

  return (
    <ServiceListItem
      serviceId="2"
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
      <FormControl flex="0 0 200px">
        <FormLabel>Model</FormLabel>
        <Select flex={'0 0 200px'} placeholder="Wybierz model">
          {rentCars.map((car) => (
            <option key={car.name} value={car.name}>
              {car.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl flex="0 0 200px">
        <FormLabel>Dni</FormLabel>
        <Input onChange={daysInputHandler} value={0} min="0" placeholder="days" type="number" />
      </FormControl>
    </ServiceListItem>
  )
}
