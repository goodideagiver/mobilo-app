import { ChangeEventHandler, useState } from 'react'

import { rentCars } from '../../constants/rentCars'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { SingleService } from '../../store/servicesStore/servicesTypes'
import { rentCarCopyText } from './rentCar.helpers'

export const useRentCar = () => {
  const [days, setDays] = useState(0)
  const [carPrice, setCarPrice] = useState(0)
  const [carName, setCarName] = useState('')

  const rentCarServiceStore = useServicesStore((state) =>
    state.services.find((service) => service.id === '2'),
  ) as SingleService

  const setPrice = useServicesStore((state) => state.setServicePrice)

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
    } else {
      setPrice('2', 0)
    }
  }

  const shouldDisplayText = days > 0 && carName !== '' && carPrice > 0

  const textToCopy = shouldDisplayText ? rentCarCopyText(carPrice, days, carName) : 'Nie wybrano modelu auta lub dni'

  return {
    days,
    daysInputHandler,
    carSelectHandler,
    shouldDisplayText,
    priceFromStore: rentCarServiceStore.price,
    textToCopy,
  }
}
