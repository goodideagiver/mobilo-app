import { TopLevelSettings } from './servicesTypes'

import create from 'zustand'

const defaultSettings: TopLevelSettings = {
  distanceAfterRepair: 0,
  distanceBeforeRepair: 0,
  vehicleWeight: 'below 3.5t',
}

export type MixGroup = 1 | 2 | 3 | null

type SingleService = {
  id: string
  mixGroup: MixGroup
  price: number
  title: string
  textSummary: string
  active: boolean
}

const defaultServices: SingleService[] = [
  {
    title: 'Holowanie z miejsca awarii',
    id: '1',
    mixGroup: 1,
    price: 0,
    textSummary: '',
    active: false,
  },
  {
    title: 'Auto zastępcze',
    id: '2',
    mixGroup: 2,
    price: 0,
    textSummary: '',
    active: false,
  },
  {
    title: 'Dojazd do miejsca awarii',
    id: '3',
    mixGroup: 1,
    price: 0,
    textSummary: '',
    active: false,
  },
  {
    title: 'Bonus za naprawę na miejscu',
    id: '4',
    mixGroup: 1,
    price: 0,
    textSummary: 'Bonus za naprawę na miejscu 100 zł',
    active: false,
  },
  {
    title: 'Odwiezienie auta',
    id: '5',
    mixGroup: 1,
    price: 0,
    textSummary: '',
    active: false,
  },
  {
    title: 'Dokumentacja',
    id: '6',
    mixGroup: 1,
    price: 0,
    textSummary: 'Ryczałt 100 zł za wykonanie dokumentacji',
    active: false,
  },
]

interface ServiceState {
  settings: TopLevelSettings
  services: SingleService[]
  setDistanceBeforeRepair: (distance: number) => void
  setDistanceAfterRepair: (distance: number) => void
  setVehicleWeight: (weight: TopLevelSettings['vehicleWeight']) => void
  toggleService: (id: string) => void
  resetServices: () => void
}

const initialState = {
  settings: defaultSettings,
  services: defaultServices,
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
  toggleService: (id) =>
    set((state) => ({
      ...state,
      services: state.services.map((service) =>
        service.id === id
          ? {
              ...service,
              active: !service.active,
            }
          : service,
      ),
    })),
  resetServices: () =>
    set((state) => ({
      ...state,
      services: defaultServices,
    })),
}))
