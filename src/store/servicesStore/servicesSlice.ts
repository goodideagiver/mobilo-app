import { Key } from 'react'
import { StateCreator } from 'zustand'
import { SHORTCUT_KEYS } from '../../constants/shortcutKeys'
import { EuroCourseSlice } from './euroSlice'
import { setTextSummary } from './helpers'
import { VehicleWeight } from './servicesTypes'
import { defaultSettings } from './settingsSlice'

export type MixGroup = 1 | 2 | 3 | null

export type SingleService = {
  id: string
  mixGroup: MixGroup
  price: number
  title: string
  textSummary: string
  active: boolean
  beforeRepair?: boolean
  deleteServiceShortcut?: Key
}

export type ServicesSlice = {
  services: SingleService[]
  toggleService: (id: string) => void
  resetServices: () => void
  setServicePrice: (id: string, price: number) => void
  setServiceTextSummary: (id: string, textSummary: string) => void
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
    beforeRepair: true,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.TOW_TO_BREAKDOWN,
  },
  {
    title: 'Auto zastępcze',
    id: '2',
    mixGroup: 2,
    price: 0,
    textSummary: '',
    active: false,
    beforeRepair: true,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.RENT_CAR,
  },
  {
    title: 'Dojazd do miejsca awarii',
    id: '3',
    mixGroup: 1,
    price: 0,
    textSummary: '',
    active: false,
    beforeRepair: true,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.DRIVE_TO_CLIENT,
  },
  {
    title: 'Bonus za naprawę na miejscu',
    id: '4',
    mixGroup: 1,
    price: 100,
    textSummary: 'Bonus za naprawę na miejscu 100 zł',
    active: false,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.BONUS,
  },
  {
    title: 'Odwiezienie auta',
    id: '5',
    mixGroup: 1,
    price: defaultSettings.distanceAfterRepair < 50 ? 300 : defaultSettings.distanceAfterRepair * 1.41 * 4 + 60.03 * 4,
    textSummary: '',
    active: false,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.TOW_BACK,
  },
  {
    title: 'Dokumentacja',
    id: '6',
    mixGroup: 1,
    price: 100,
    textSummary: 'Ryczałt 100 zł za wykonanie dokumentacji',
    active: false,
    deleteServiceShortcut: SHORTCUT_KEYS.REMOVE_SERVICE.DOCUMENTATION,
  },
]

export const createServicesSlice: StateCreator<ServicesSlice & EuroCourseSlice, [], [], ServicesSlice> = (set) => ({
  services: defaultServices,
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
})
