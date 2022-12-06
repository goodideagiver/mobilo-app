import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { Service, VehicleWeight } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

type Fee = {
  [K in VehicleWeight]: number
}

export const Towing = () => {
  const { distanceBeforeRepair, vehicleWeight } = useServicesStore((state) => state.settings)

  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '1'))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  const handlingFee: Fee = {
    ['below 3.5t']: 600,
    ['3.5t-5.5t']: 800,
  }

  const rate: Fee = {
    ['below 3.5t']: 4.9,
    ['3.5t-5.5t']: 12.5,
  }

  const handlingFeeFormatted = numberToOutputCurrencyString(handlingFee[vehicleWeight])

  const rateFormatted = numberToOutputCurrencyString(rate[vehicleWeight])

  const textToCopy = `OPŁATA MANIPULACYJNA = ${handlingFeeFormatted} NETTO
  OPŁATA ZA ODLEGŁOŚĆ = ${rateFormatted}/km NETTO X ${distanceBeforeRepair} km = ${numberToOutputCurrencyString(
    rate[vehicleWeight] * distanceBeforeRepair,
  )}
  RAZEM = ${numberToOutputCurrencyString(
    rate[vehicleWeight] * distanceBeforeRepair + handlingFee[vehicleWeight],
  )} NETTO`

  const serviceData: Service = {
    title: 'Holowanie',
    price: rate[vehicleWeight] * distanceBeforeRepair + handlingFee[vehicleWeight],
    badges: ['przed naprawą'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return (
    <ServiceListItem service={serviceData} textToCopy={textToCopy}>
      Waga pojazdu: {vehicleWeight}
    </ServiceListItem>
  )
}
