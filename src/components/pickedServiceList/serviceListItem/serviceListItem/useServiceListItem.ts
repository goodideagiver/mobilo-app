import { useCantBeMixedWith } from '../../../../hooks/useCantBeMixedWithOtherService'
import { useServicesStore } from '../../../../store/servicesStore/servicesStore'

export const useServiceListItem = (serviceId: string, cantBeMixedWith?: string[]) => {
  const serviceStore = useServicesStore((state) => state.services.find((service) => service.id === serviceId))

  const isActive = serviceStore?.active

  const toggleService = useServicesStore((state) => state.toggleService)
  const deleteServiceButtonHandler = () => {
    toggleService(serviceId)
  }
  const { hasErrors, conflictingServices } = useCantBeMixedWith(cantBeMixedWith)

  const bgColor = hasErrors ? 'red.900' : 'transparent'

  const conflictingServicesText = `Ta usługa nie może być łączona z: ${conflictingServices
    ?.map((service) => service.title)
    .join(', ')}`

  return {
    conflictingServices,
    hasErrors,
    bgColor,
    isActive,
    deleteServiceButtonHandler,
    conflictingServicesText,
    shortcutKey: serviceStore?.deleteServiceShortcut,
  }
}
