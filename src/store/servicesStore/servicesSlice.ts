import { StateCreator } from 'zustand'

import { defaultServices } from './defaultServices'
import { EuroCourseSlice } from './euroSlice'
import { setTextSummary } from './helpers'
import { ServicesSlice } from './servicesTypes'

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
