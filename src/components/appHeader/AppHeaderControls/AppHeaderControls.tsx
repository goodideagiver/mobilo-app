import { HStack } from '@chakra-ui/react'

import { SHORTCUT_KEYS } from '../../../constants/shortcutKeys'
import { VehicleMassToggle } from '../VehicleMassToggle/VehicleMassToggle'
import { HeaderNumberInput } from '../headerNumberInput'
import { useAppHeaderControls } from './useAppHeaderControls'

export const AppHeaderControls = () => {
  const { distanceAfterRepair, distanceAfterRepairInputHandler, distanceBeforeRepair, distanceInputHandler } =
    useAppHeaderControls()

  const distanceInputs = [
    {
      inputHelperText: 'Odległość w jedną stronę (km)',
      inputTitle: 'Odległość',
      value: distanceBeforeRepair,
      onChange: distanceInputHandler,
      focusShortcut: SHORTCUT_KEYS.FOCUS.DISTANCE_TO_BREAKDOWN,
    },
    {
      inputHelperText: 'Odległość w jedną stronę (km)',
      inputTitle: 'Odległość odwiezienia',
      value: distanceAfterRepair,
      onChange: distanceAfterRepairInputHandler,
      focusShortcut: SHORTCUT_KEYS.FOCUS.DISTANCE_TOW_BACK,
    },
  ].map((input) => <HeaderNumberInput key={input.inputTitle} {...input} />)

  return (
    <HStack h='100%' rounded='2xl' p='4' shadow='lg' border='4px' borderColor='gray.700' align='baseline'>
      {distanceInputs} <VehicleMassToggle />
    </HStack>
  )
}
