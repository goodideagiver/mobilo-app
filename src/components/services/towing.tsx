import { handlingFee, rate } from '../../constants/servicesFinancialData'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem/serviceListItem'

type Props = {
  serviceId: string
}

export const Towing = ({ serviceId }: Props) => {
  const { distanceBeforeRepair, vehicleWeight } = useServicesStore((state) => state.settings)

  const towingServiceStore = useServicesStore((state) => state.services.find((service) => service.id === serviceId))

  const isActive = towingServiceStore?.active

  if (!isActive) return null

  const handlingFeeFormatted = numberToOutputCurrencyString(handlingFee[vehicleWeight])

  const rateFormatted = numberToOutputCurrencyString(rate[vehicleWeight])

  const textToCopy = `OPŁATA MANIPULACYJNA = ${handlingFeeFormatted} NETTO
  OPŁATA ZA ODLEGŁOŚĆ = ${rateFormatted}/km NETTO X ${distanceBeforeRepair} km = ${numberToOutputCurrencyString(
    rate[vehicleWeight] * distanceBeforeRepair,
  )}
  RAZEM = ${numberToOutputCurrencyString(towingServiceStore.price)} NETTO`

  const serviceData: Service = {
    title: 'Holowanie',
    price: towingServiceStore.price,
    badges: ['przed naprawą'],
    active: true,
    serviceType: 'after repair',
    serviceSummaryText: 'Dokumentacja',
    preventCombineGroup: null,
  }

  return (
    <ServiceListItem cantBeMixedWith={['3', '4']} serviceId={serviceId} service={serviceData} textToCopy={textToCopy} />
  )
}
