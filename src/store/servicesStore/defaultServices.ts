import { handlingFee, rate } from '../../constants/servicesFinancialData'
import { SHORTCUT_KEYS } from '../../constants/shortcutKeys'
import { SingleService } from './servicesTypes'
import { defaultSettings } from './settingsSlice'

export const defaultServices: SingleService[] = [
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
