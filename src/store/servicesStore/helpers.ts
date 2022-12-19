import { handlingFee, rate, SingleService } from './servicesSlice'
import { VehicleWeight } from './servicesTypes'

export const driveToClientCostPerKM = 0.5

export const calculateDriveToClient = (rate: number, hours: number, oneWayDistance: number): number => {
  return rate * hours + oneWayDistance * 2 * driveToClientCostPerKM
}

export const calculateTowing = (distanceOneWay: number, vehicleWeight: VehicleWeight): number => {
  return distanceOneWay * rate[vehicleWeight] + handlingFee[vehicleWeight]
}

export const setTextSummary = (services: SingleService[], textSummary: string, id: string): SingleService[] => {
  return services.map((service) => {
    if (service.id === id) {
      return { ...service, textSummary }
    }
    return service
  })
}
