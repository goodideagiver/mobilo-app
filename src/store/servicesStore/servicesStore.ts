import { Service, TopLevelSettings } from './servicesTypes'

const defaultSettings: TopLevelSettings = {
  distanceAfterRepair: 0,
  distanceBeforeRepair: 0,
  vehicleWeight: 'below 3.5t',
}

interface ServiceState {
  settings: TopLevelSettings
  services: Service[]
}

const initialState: ServiceState = {
  settings: defaultSettings,
  services: [
    {
      active: true,
      preventCombineGroup: '1',
      serviceType: 'before repair',
      badges: ['przed naprawą'],
      price: 0,
      title: 'Holowanie',
    },
  ],
}
