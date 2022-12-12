import { useServicesStore } from '../../../store/servicesStore/servicesStore'

export const useVehicleMassToggle = () => {
  const setVehicleWeight = useServicesStore((state) => state.setVehicleWeight)

  const vehicleWeightInputHandler = (weight: unknown) => {
    if (weight === '3.5t-5.5t' || weight === 'below 3.5t') {
      setVehicleWeight(weight)
    }
  }

  return { vehicleWeightInputHandler }
}
