import create from 'zustand'
import { createDriveToPlaceSlice, DriveToPlaceSlice } from './driveToPlaceSlice'
import { createEuroSlice, EuroCourseSlice } from './euroSlice'
import { createServicesSlice, ServicesSlice } from './servicesSlice'
import { createSettingsSlice, SettingsSlice } from './settingsSlice'

type BoundStore = SettingsSlice & ServicesSlice & DriveToPlaceSlice & EuroCourseSlice

export const useServicesStore = create<BoundStore>()((...a) => ({
  ...createSettingsSlice(...a),
  ...createServicesSlice(...a),
  ...createDriveToPlaceSlice(...a),
  ...createEuroSlice(...a),
}))
