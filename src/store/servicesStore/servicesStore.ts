import { Service, TopLevelSettings } from './servicesTypes'

import create from 'zustand'

const defaultSettings: TopLevelSettings = {
  distanceAfterRepair: 0,
  distanceBeforeRepair: 0,
  vehicleWeight: 'below 3.5t',
}

interface ServiceState {
  settings: TopLevelSettings
  services: Service[]
  setDistanceBeforeRepair: (distance: number) => void
  setDistanceAfterRepair: (distance: number) => void
  setVehicleWeight: (weight: TopLevelSettings['vehicleWeight']) => void
}

const initialState = {
  settings: defaultSettings,
  services: [
    {
      active: true,
      preventCombineGroup: '1',
      serviceType: 'before repair',
      badges: ['przed naprawą'],
      price: 0,
      title: 'Holowanie',
    },
  ],
}

export const useServicesStore = create<ServiceState>((set) => ({
  ...initialState,
  setDistanceBeforeRepair: (distance) =>
    set((state) => ({
      ...state,
      settings: {
        ...state.settings,
        distanceBeforeRepair: distance,
      },
    })),
  setDistanceAfterRepair: (distance) =>
    set((state) => ({
      ...state,
      settings: {
        ...state.settings,
        distanceAfterRepair: distance,
      },
    })),
  setVehicleWeight: (weight) =>
    set((state) => ({
      ...state,
      settings: {
        ...state.settings,
        vehicleWeight: weight,
      },
    })),
}))
