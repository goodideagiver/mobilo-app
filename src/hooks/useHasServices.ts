import { useServicesStore } from '../store/servicesStore/servicesStore'

export const useHasServices = () => {
  const services = useServicesStore((state) => state.services)

  const activeServices = services.filter((service) => service.active)

  const servicesWithValue = activeServices.filter((service) => service.price > 0).length > 0

  return {
    servicesCount: activeServices.length,
    hasServices: activeServices.length > 0,
    hasServicesWithValue: servicesWithValue,
  }
}
