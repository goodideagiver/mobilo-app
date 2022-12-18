import { numberToOutputCurrencyString } from '../numberToOutputCurrencyString'

export const towBackText = (euroRate: number, distance: number) => {
  const initialFee = 60.03 * euroRate
  const distanceFee = distance * 1.41 * euroRate

  return `OPŁATA MANIPULACYJNA = 60,03 EURO NETTO  x KURS ${euroRate}
   = ${numberToOutputCurrencyString(initialFee)}
  OPŁATA ZA ODLEGŁOŚĆ 1,41 EUR/km NETTO X ${distance} km x KURS ${euroRate} 
  = ${numberToOutputCurrencyString(distanceFee)}
  RAZEM = ${numberToOutputCurrencyString(initialFee + distanceFee)}
  `
}
