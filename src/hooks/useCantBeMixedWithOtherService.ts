import { useServicesStore } from '../store/servicesStore/servicesStore'

export const useCantBeMixedWith = (id?: string[]) => {
  if (!id) return { hasErrors: false }

  const services = useServicesStore((state) => state.services)

  const activeServices = services.filter((service) => service.active)

  const cantBeMixedWith = activeServices.filter((service) => id.includes(service.id))

  return { hasErrors: cantBeMixedWith.length > 0, conflictingServices: cantBeMixedWith }
}
