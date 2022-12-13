import { FormControl, FormHelperText, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import { useVehicleMassToggle } from './useVehicleMassToggle'

export const VehicleMassToggle = () => {
  const { vehicleWeightInputHandler } = useVehicleMassToggle()

  return (
    <FormControl h='100%' display='flex' flexDir='column' justifyContent='space-between'>
      <FormLabel as='legend'>Masa pojazdu</FormLabel>
      <RadioGroup onChange={vehicleWeightInputHandler} defaultValue='below 3.5t'>
        <HStack spacing='24px'>
          <Radio value='below 3.5t'>Poniżej 3.5t</Radio>
          <Radio value='3.5t-5.5t'>3.5t - 5.5t</Radio>
        </HStack>
      </RadioGroup>
      <FormHelperText>Do rozliczania holowania</FormHelperText>
    </FormControl>
  )
}
