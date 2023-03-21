import create from 'zustand'
import { persist } from 'zustand/middleware'

type ExtendedInfoStore = {
  extendedInfo: boolean
  show: () => void
  hide: () => void
}

export const useExtendedInfoStore = create<ExtendedInfoStore>()(
  persist(
    (set, get) => ({
      extendedInfo: true,
      show: () => set({ extendedInfo: true }),
      hide: () => set({ extendedInfo: false }),
    }),
    {
      name: 'extendedInfo',
    },
  ),
)
