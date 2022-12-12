import { FormControl, FormHelperText, FormLabel, HStack, Radio, RadioGroup } from '@chakra-ui/react'

type Props = {
  vehicleWeightInputHandler: (weight: string) => void
}

export const VehicleMassToggle = ({ vehicleWeightInputHandler }: Props) => (
  <FormControl h='100%' display='flex' flexDir='column' justifyContent='space-between'>
    <FormLabel as='legend'>Masa pojazdu</FormLabel>
    <RadioGroup onChange={vehicleWeightInputHandler} defaultValue='0'>
      <HStack spacing='24px'>
        <Radio value='0'>Poniżej 3.5t</Radio>
        <Radio value='1'>3.5t - 5.5t</Radio>
      </HStack>
    </RadioGroup>
    <FormHelperText>Do rozliczania holowania</FormHelperText>
  </FormControl>
)
