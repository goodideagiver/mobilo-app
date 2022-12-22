import { towBeforeRepairHandlingFee, towBeforeRepairRate } from '../../constants/servicesFinancialData'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { VehicleWeight } from '../../store/servicesStore/servicesTypes'

export const towingText = (vehicleWeight: VehicleWeight, distance: number) => {
  const weightText = `Masa pojazdu: ${vehicleWeight === 'below 3.5t' ? 'poniżej 3.5t' : '3.5t-5.5t'}`
  const handingFee = numberToOutputCurrencyString(towBeforeRepairHandlingFee[vehicleWeight])
  const handingFeeText = `Opłata manipulacyjna: ${handingFee}`
  const distanceFee = numberToOutputCurrencyString(distance * towBeforeRepairRate[vehicleWeight])
  const distanceFeeText = `Opłata za odległość: ${distance} km X ${numberToOutputCurrencyString(
    towBeforeRepairRate[vehicleWeight],
  )} = ${distanceFee}`
  const sum = numberToOutputCurrencyString(
    distance * towBeforeRepairRate[vehicleWeight] + towBeforeRepairHandlingFee[vehicleWeight],
  )
  const sumText = `Razem: ${sum}`

  return [weightText, handingFeeText, distanceFeeText, sumText].join(' | ')
}
