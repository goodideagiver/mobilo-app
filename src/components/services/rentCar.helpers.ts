import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'

export const rentCarCopyText = (rate: number, days: number, carModel: string): string => {
  const car = `Auto zastępcze: ${carModel}`
  const cost = `Wynajem na ${days} dni, stawka ${numberToOutputCurrencyString(rate)} za dzień`
  const total = `Razem: ${numberToOutputCurrencyString(rate * days)}`

  return [car, cost, total].join(' | ')
}
