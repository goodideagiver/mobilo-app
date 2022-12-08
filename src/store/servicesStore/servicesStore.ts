import { TopLevelSettings, VehicleWeight } from './servicesTypes'

import create from 'zustand'
import { calculateDriveToClient, calculateTowing, setTextSummary } from './helpers'

const defaultSettings: TopLevelSettings = {
  distanceAfterRepair: 0,
  distanceBeforeRepair: 0,
  vehicleWeight: 'below 3.5t',
}

export type MixGroup = 1 | 2 | 3 | null

export type SingleService = {
  id: string
  mixGroup: MixGroup
  price: number
  title: string
  textSummary: string
  active: boolean
}

type Fee = {
  [K in VehicleWeight]: number
}

export const handlingFee: Fee = {
  ['below 3.5t']: 600,
  ['3.5t-5.5t']: 800,
}

export const rate: Fee = {
  ['below 3.5t']: 4.9,
  ['3.5t-5.5t']: 12.5,
}

const defaultServices: SingleService[] = [
  {
    title: 'Holowanie z miejsca awarii',
    id: '1',
    mixGroup: 1,
    price:
      handlingFee[defaultSettings.vehicleWeight] +
      rate[defaultSettings.vehicleWeight] * defaultSettings.distanceBeforeRepair,
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
    price: 100,
    textSummary: 'Bonus za naprawę na miejscu 100 zł',
    active: false,
  },
  {
    title: 'Odwiezienie auta',
    id: '5',
    mixGroup: 1,
    price: defaultSettings.distanceAfterRepair < 50 ? 300 : defaultSettings.distanceAfterRepair * 1.41 * 4 + 60.03 * 4,
    textSummary: '',
    active: false,
  },
  {
    title: 'Dokumentacja',
    id: '6',
    mixGroup: 1,
    price: 100,
    textSummary: 'Ryczałt 100 zł za wykonanie dokumentacji',
    active: false,
  },
]

interface ServiceState {
  settings: TopLevelSettings
  services: SingleService[]
  euroCourse: number
  driveToPlace: {
    rate: number
    hours: number
    setRate: (rate: number) => void
    setHours: (hours: number) => void
  }
  setDistanceBeforeRepair: (distance: number) => void
  setDistanceAfterRepair: (distance: number) => void
  setVehicleWeight: (weight: TopLevelSettings['vehicleWeight']) => void
  toggleService: (id: string) => void
  resetServices: () => void
  setServicePrice: (id: string, price: number) => void
  setServiceTextSummary: (id: string, textSummary: string) => void
}

const initialState = {
  settings: defaultSettings,
  services: defaultServices,
  euroCourse: 4.5,
}

export const useServicesStore = create<ServiceState>((set) => ({
  ...initialState,
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
  setServicePrice: (id, price) =>
    set((state) => ({
      ...state,
      services: state.services.map((service) =>
        service.id === id
          ? {
              ...service,
              price,
            }
          : service,
      ),
    })),
  setServiceTextSummary: (id, textSummary) =>
    set((state) => ({
      ...state,
      services: setTextSummary(state.services, id, textSummary),
    })),
}))
