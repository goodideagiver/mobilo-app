import { FormControl, FormLabel, HStack, Input } from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

import { ChangeEventHandler } from 'react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { driveToClientCostPerKM } from '../../store/servicesStore/helpers'

export const DriveToClient = () => {
  const driveToClientServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '3'))

  const { hours, rate, setHours, setRate } = useServicesStore((state) => state.driveToPlace)

  const distance = useServicesStore((state) => state.settings.distanceBeforeRepair)

  const hoursInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHours(+event.target.value)
  }

  const rateInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRate(+event.target.value)
  }

  const isActive = driveToClientServiceStore?.active

  if (!isActive) return null

  const isInvalid = !hours || !rate || !distance || hours < 0 || rate < 0 || distance < 0 || hours === 0

  const textToCopy = `
      Dojazd i powrot z miejsca awarii:
      CZAS PRACY MECHANIKA ${hours} h X STAWKA ${numberToOutputCurrencyString(rate)}/h + ${
    distance * 2
  } KM X ${numberToOutputCurrencyString(driveToClientCostPerKM)} = ${numberToOutputCurrencyString(
    driveToClientServiceStore.price,
  )}
`.toUpperCase()

  const displayText = isInvalid ? 'Podaj: odległość, stawkę oraz roboczogodziny żeby obliczyć wartość' : textToCopy

  return (
    <ServiceListItem
      cantBeMixedWith={['2', '1', '5']}
      hasError={isInvalid}
      serviceId='3'
      service={{
        active: true,
        badges: ['przed naprawą'],
        price: driveToClientServiceStore.price,
        title: 'Dojazd do miejsca awarii',
        preventCombineGroup: null,
        serviceType: 'before repair',
      }}
      textToCopy={displayText}
    >
      <HStack>
        <FormControl>
          <FormLabel>Roboczogodziny</FormLabel>
          <Input onChange={hoursInputHandler} value={hours} min='0' placeholder='RBH' type='number' />
        </FormControl>
        <FormControl>
          <FormLabel>Stawka</FormLabel>
          <Input onChange={rateInputHandler} value={rate} min='0' placeholder='stawka' type='number' />
        </FormControl>
      </HStack>
    </ServiceListItem>
  )
}
