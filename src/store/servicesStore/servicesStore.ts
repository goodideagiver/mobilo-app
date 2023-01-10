import create from 'zustand'

import { DriveToPlaceSlice, createDriveToPlaceSlice } from './driveToPlaceSlice'
import { EuroCourseSlice, createEuroSlice } from './euroSlice'
import { createServicesSlice } from './servicesSlice'
import { ServicesSlice } from './servicesTypes'
import { SettingsSlice, createSettingsSlice } from './settingsSlice'

type BoundStore = SettingsSlice & ServicesSlice & DriveToPlaceSlice & EuroCourseSlice

export const useServicesStore = create<BoundStore>()((...a) => ({
  ...createSettingsSlice(...a),
  ...createServicesSlice(...a),
  ...createDriveToPlaceSlice(...a),
  ...createEuroSlice(...a),
}))
