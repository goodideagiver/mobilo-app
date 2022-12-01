export type TopLevelSettings = {
  distanceFromBreakLocation: number
  distanceTowBack: number
  vehicleWeight: 'below 3.5t' | '3.5t-5.5t'
}

type ServiceType = 'before repair' | 'after repair'

type ServiceBadge = 'ryczałt' | 'po naprawie' | 'przed naprawą'

export interface Service {
  title: string
  active: boolean
  preventCombineGroup: string
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
