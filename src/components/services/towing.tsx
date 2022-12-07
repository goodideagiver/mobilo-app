import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { handlingFee, rate, useServicesStore } from '../../store/servicesStore/servicesStore'
import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const Towing = () => {
  const { distanceBeforeRepair, vehicleWeight } = useServicesStore((state) => state.settings)

  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '1'))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

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
    price: towingServiceStore.price,
    badges: ['przed naprawą'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return <ServiceListItem service={serviceData} textToCopy={textToCopy} />
}
