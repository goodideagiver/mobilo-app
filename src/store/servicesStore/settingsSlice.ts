import { StateCreator } from 'zustand'
import { DriveToPlaceSlice } from './driveToPlaceSlice'
import { calculateDriveToClient, calculateTowing } from './helpers'
import { ServicesSlice, TopLevelSettings } from './servicesTypes'

export type SettingsSlice = {
  settings: TopLevelSettings
  setDistanceBeforeRepair: (distance: number) => void
  setDistanceAfterRepair: (distance: number) => void
  setVehicleWeight: (weight: TopLevelSettings['vehicleWeight']) => void
}

export const defaultSettings: TopLevelSettings = {
  distanceAfterRepair: 0,
  distanceBeforeRepair: 0,
  vehicleWeight: 'below 3.5t',
}

export const createSettingsSlice: StateCreator<
  SettingsSlice & ServicesSlice & DriveToPlaceSlice,
  [],
  [],
  SettingsSlice
> = (set) => ({
  settings: defaultSettings,
  setVehicleWeight: (weight) =>
    set((state) => ({
      ...state,
      settings: {
        ...state.settings,
        vehicleWeight: weight,
      },
      services: state.services.map((service) => {
        if (service.id === '1') {
          return {
            ...service,
            price: calculateTowing(state.settings.distanceBeforeRepair, weight),
          }
        }
        return service
      }),
    })),
  setDistanceBeforeRepair: (distance) =>
    set((state) => ({
      ...state,
      services: state.services.map((service) => {
        if (service.id === '1') {
          return {
            ...service,
            price: calculateTowing(distance, state.settings.vehicleWeight),
          }
        }
        if (service.id === '3') {
          return {
            ...service,
            price: calculateDriveToClient(state.driveToPlace.rate, state.driveToPlace.hours, distance),
          }
        }
        return service
      }),
      settings: {
        ...state.settings,
        distanceBeforeRepair: distance,
      },
    })),
  setDistanceAfterRepair: (distance) =>
    set((state) => ({
      ...state,
      services: state.services.map((service) => {
        if (service.id === '5') {
          return {
            ...service,
            price: distance < 50 ? 300 : distance * 1.41 * 4 + 60.03 * 4,
          }
        }
        return service
      }),
      settings: {
        ...state.settings,
        distanceAfterRepair: distance,
      },
    })),
})
