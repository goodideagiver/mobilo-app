import { FormControl, FormHelperText, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { SHORTCUT_KEYS } from '../../../constants/shortcutKeys'
import { ModifierKeyDisplay } from '../../ui/ModifierKeyDisplay'
import { useVehicleMassToggle } from './useVehicleMassToggle'

export const VehicleMassToggle = () => {
  const { vehicleWeightInputHandler } = useVehicleMassToggle()

  const radioRef = useRef<HTMLInputElement>(null)

  const keyBoardPressHandler = () => {
    const radioInputs = radioRef.current?.querySelectorAll('input')
    if (radioInputs) [...radioInputs].find((input) => input.checked)?.focus()
  }

  return (
    <FormControl h='100%' display='flex' flexDir='column' justifyContent='space-between'>
      <FormLabel as='legend'>Masa pojazdu</FormLabel>
      <ModifierKeyDisplay keyboardKey={SHORTCUT_KEYS.FOCUS.VEHICLE_MASS} callback={keyBoardPressHandler}>
        <RadioGroup ref={radioRef} onChange={vehicleWeightInputHandler} defaultValue='below 3.5t'>
          <HStack spacing='24px'>
            <Radio value='below 3.5t'>Poniżej 3.5t</Radio>
            <Radio value='3.5t-5.5t'>3.5t - 5.5t</Radio>
          </HStack>
        </RadioGroup>
      </ModifierKeyDisplay>
      <FormHelperText>Do rozliczania holowania</FormHelperText>
    </FormControl>
  )
}
