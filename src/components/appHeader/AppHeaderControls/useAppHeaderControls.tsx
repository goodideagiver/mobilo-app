import { ChangeEventHandler } from 'react'
import { useServicesStore } from '../../../store/servicesStore/servicesStore'

export const useAppHeaderControls = () => {
  const { setDistanceAfterRepair, setDistanceBeforeRepair, settings } = useServicesStore((state) => state)

  const distanceInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceBeforeRepair(Number(event.target.value))
  }

  const distanceAfterRepairInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceAfterRepair(Number(event.target.value))
  }

  return {
    distanceInputHandler,
    distanceAfterRepairInputHandler,
    distanceBeforeRepair: settings.distanceBeforeRepair,
    distanceAfterRepair: settings.distanceAfterRepair,
  }
}
