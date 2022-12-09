import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import { rentCars } from '../../store/servicesStore/rentCars'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

import { useState } from 'react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'

export const RentCar = () => {
  const [days, setDays] = useState(0)
  const [carPrice, setCarPrice] = useState(0)
  const [carName, setCarName] = useState('')

  const rentCarServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '2'))

  const setPrice = useServicesStore((state) => state.setServicePrice)

  const isActive = rentCarServiceStore?.active

  if (!isActive) return null

  const daysInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const days = event.target.valueAsNumber
    setDays(days)

    if (isFinite(days) && isFinite(carPrice)) {
      setPrice('2', days * carPrice)
    }
  }

  const carSelectHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const carPrice = rentCars.find((car) => car.name === event.target.value)?.price

    setCarName(event.target.value)

    if (carPrice) {
      setCarPrice(carPrice)
    }

    if (isFinite(days) && carPrice && isFinite(carPrice)) {
      setPrice('2', days * carPrice)
    }
  }

  const shouldDisplayText = days > 0 && carName !== '' && carPrice > 0

  return (
    <ServiceListItem
      serviceId="2"
      service={{
        active: true,
        badges: ['przed naprawą'],
        price: rentCarServiceStore.price,
        title: 'Auto zastępcze',
        preventCombineGroup: null,
        serviceType: 'before repair',
      }}
      textToCopy={
        shouldDisplayText
          ? `AUTO ZASTĘPCZE: ${carName} NA ${days} DNI X STAWKA ${numberToOutputCurrencyString(
              carPrice,
            )} netto za dobę = ${numberToOutputCurrencyString(rentCarServiceStore.price)}
`
          : 'Nie wybrano modelu auta lub dni'
      }
    >
      <FormControl flex="0 0 200px">
        <FormLabel>Model</FormLabel>
        <Select flex={'0 0 200px'} onChange={carSelectHandler} placeholder="Wybierz model">
          {rentCars.map((car) => (
            <option key={car.name} value={car.name}>
              {car.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl flex="0 0 200px">
        <FormLabel>Dni</FormLabel>
        <Input step={0} onChange={daysInputHandler} value={days} min="0" placeholder="days" type="number" />
      </FormControl>
    </ServiceListItem>
  )
}
