import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { rentCars } from '../../constants/rentCars'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useRentCar } from './rentCar.hook'

const CarOption = ({ name, price, model }: { name: string; price: number; model: string }) => {
  return (
    <option style={{ fontSize: '12px', textAlign: 'center' }} key={name} value={model}>
      {`${name} - ${numberToOutputCurrencyString(price)} / doba`}
    </option>
  )
}

export const RentCar = () => {
  const { days, carSelectHandler, daysInputHandler, shouldDisplayText, priceFromStore, textToCopy } = useRentCar()

  return (
    <ServiceListItem
      hasError={!shouldDisplayText}
      serviceId='2'
      service={{
        active: true,
        badges: ['przed naprawą'],
        price: priceFromStore,
        title: 'Auto zastępcze',
        preventCombineGroup: null,
        serviceType: 'before repair',
      }}
      textToCopy={textToCopy}
    >
      <FormControl flex='0 0 200px'>
        <FormLabel>Model</FormLabel>
        <Select flex={'0 0 200px'} onChange={carSelectHandler} placeholder='Wybierz model'>
          {rentCars.map((car) => (
            <CarOption key={car.name} name={car.name} price={car.price} model={car.name} />
          ))}
        </Select>
      </FormControl>
      <FormControl flex='0 0 200px'>
        <FormLabel>Dni</FormLabel>
        <Input step={0} onChange={daysInputHandler} value={days} min='0' placeholder='days' type='number' />
      </FormControl>
    </ServiceListItem>
  )
}
