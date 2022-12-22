import { Fee } from '../store/servicesStore/servicesTypes'

export const towBeforeRepairHandlingFee: Fee = {
  ['below 3.5t']: 600,
  ['3.5t-5.5t']: 800,
}

export const towBeforeRepairRate: Fee = {
  ['below 3.5t']: 4.9,
  ['3.5t-5.5t']: 12.5,
}
