const REMOVE_SERVICE = {
  TOW_TO_BREAKDOWN: 'H',
  TOW_BACK: 'J',
  DRIVE_TO_CLIENT: 'K',
  RENT_CAR: 'L',
  DOCUMENTATION: 'B',
  BONUS: 'N',
} as const

const FOCUS = {
  DISTANCE_TO_BREAKDOWN: 'Q',
  DISTANCE_TOW_BACK: 'W',
  VEHICLE_MASS: 'E',
} as const

export const SHORTCUT_KEYS = {
  VIEW_SERVICES: 'V',
  RESET: 'R',
  SHOW_DRAWER: 'D',
  FOCUS,
  REMOVE_SERVICE,
} as const
