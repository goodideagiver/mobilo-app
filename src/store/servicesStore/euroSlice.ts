import { StateCreator } from 'zustand'

export type EuroCourseSlice = {
  euroCourse: {
    rate: number
    timestamp: number
  }
  setEuroCourse: (euroCourse: number, timestamp: number) => void
}

export const createEuroSlice: StateCreator<EuroCourseSlice> = (set) => ({
  euroCourse: {
    rate: 0,
    timestamp: 0,
  },
  setEuroCourse: (euroCourse, timestamp) =>
    set((state) => ({
      ...state,
      euroCourse: {
        rate: euroCourse,
        timestamp,
      },
    })),
})
