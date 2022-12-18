const API_URL = 'https://api.nbp.pl/api/exchangerates/rates/A/EUR/?format=json'

export const getEuroCourse = async () => {
  const resp = await fetch(API_URL)

  const data = await resp.json()

  return { rate: data.rates[0].mid, date: data.rates[0].effectiveDate }
}
