import { HStack } from '@chakra-ui/react'
import { HeaderNumberInput } from '../headerNumberInput'

import { VehicleMassToggle } from '../VehicleMassToggle/VehicleMassToggle'
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
      focusShortcut: 'Q',
    },
    {
      inputHelperText: 'Odległość w jedną stronę (km)',
      inputTitle: 'Odległość odwiezienia',
      value: distanceAfterRepair,
      onChange: distanceAfterRepairInputHandler,
      focusShortcut: 'W',
    },
  ].map((input) => <HeaderNumberInput key={input.inputTitle} {...input} />)

  return (
    <HStack h='100%' rounded='2xl' p='4' shadow='lg' border='4px' borderColor='gray.700' align='baseline'>
      {distanceInputs} <VehicleMassToggle />
    </HStack>
  )
}
