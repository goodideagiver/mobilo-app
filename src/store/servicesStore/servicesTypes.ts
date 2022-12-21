import { Key } from 'react'

export type VehicleWeight = 'below 3.5t' | '3.5t-5.5t'

export type TopLevelSettings = {
  distanceBeforeRepair: number
  distanceAfterRepair: number
  vehicleWeight: VehicleWeight
}

type ServiceType = 'before repair' | 'after repair'

export type ServiceBadge = 'ryczałt' | 'po naprawie' | 'przed naprawą'

export interface Service {
  title: string
  active: boolean
  preventCombineGroup: string | null
  serviceType: ServiceType
  badges: ServiceBadge[]
  serviceSummaryText?: string
  price: number
}

export interface TowingFromBreakdown extends Service {
  serviceType: 'before repair'
  badges: ['przed naprawą']
}

export interface TowingAfterRepair extends Service {
  serviceType: 'after repair'
}

export interface TowingFixedPrice extends TowingAfterRepair {
  badges: ['po naprawie', 'ryczałt']
  price: 300
}

export interface TowingAbove50km extends TowingAfterRepair {
  badges: ['po naprawie']
}

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

export type Fee = {
  [K in VehicleWeight]: number
}
