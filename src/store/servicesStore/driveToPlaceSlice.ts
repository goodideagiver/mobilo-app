import { StateCreator } from 'zustand'

import { calculateDriveToClient } from './helpers'
import { ServicesSlice } from './servicesTypes'
import { SettingsSlice } from './settingsSlice'

export type DriveToPlaceSlice = {
  driveToPlace: {
    rate: number
    hours: number
    setRate: (rate: number) => void
    setHours: (hours: number) => void
  }
}

export const createDriveToPlaceSlice: StateCreator<
  DriveToPlaceSlice & ServicesSlice & SettingsSlice,
  [],
  [],
  DriveToPlaceSlice
> = (set) => ({
  driveToPlace: {
    rate: 0,
    hours: 0,
    setRate: (rate) =>
      set((state) => ({
        ...state,
        services: state.services.map((service) => {
          if (service.id === '3') {
            return {
              ...service,
              price: calculateDriveToClient(rate, state.driveToPlace.hours, state.settings.distanceBeforeRepair),
            }
          }
          return service
        }),
        driveToPlace: { ...state.driveToPlace, rate },
      })),
    setHours: (hours) =>
      set((state) => ({
        ...state,
        services: state.services.map((service) => {
          if (service.id === '3') {
            return {
              ...service,
              price: calculateDriveToClient(state.driveToPlace.rate, hours, state.settings.distanceBeforeRepair),
            }
          }
          return service
        }),
        driveToPlace: { ...state.driveToPlace, hours },
      })),
  },
})
