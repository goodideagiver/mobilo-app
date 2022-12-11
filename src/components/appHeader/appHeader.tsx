import { DeleteIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Circle,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
} from '@chakra-ui/react'

import { ChangeEventHandler } from 'react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { HeaderNumberInput } from './headerNumberInput'

type Props = {
  drawerOpenHandler: () => void
}
export const AppHeader = ({ drawerOpenHandler }: Props) => {
  const { setDistanceAfterRepair, setDistanceBeforeRepair, settings, setVehicleWeight, resetServices, services } =
    useServicesStore((state) => state)

  const distanceInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceBeforeRepair(Number(event.target.value))
  }

  const distanceAfterRepairInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceAfterRepair(Number(event.target.value))
  }

  const resetButtonHandler = () => resetServices()

  const vehicleWeightInputHandler = (weight: string) => {
    if (weight === '1') {
      setVehicleWeight('3.5t-5.5t')
    } else {
      setVehicleWeight('below 3.5t')
    }
  }

  const activeServices = services.filter((service) => service.active)

  const activeServiceSummary = activeServices.reduce((prev, curr) => prev + curr.price, 0)

  return (
    <Flex w='100%' align='center' justify='space-between' gap='2'>
      <Tooltip hasArrow label='Menu z usługami'>
        <IconButton aria-label='Pokaż usługi' onClick={drawerOpenHandler}>
          <HamburgerIcon />
        </IconButton>
      </Tooltip>

      <HStack h='100%' rounded='2xl' p='4' shadow='lg' border='4px' borderColor='gray.700' align='baseline'>
        <HeaderNumberInput
          inputHelperText='Odległość w jedną stronę (km)'
          inputTitle='Odległość'
          value={settings.distanceBeforeRepair}
          onChange={distanceInputHandler}
        />
        <HeaderNumberInput
          inputHelperText='Odległość w jedną stronę (km)'
          inputTitle='Odległość odwiezienia'
          value={settings.distanceAfterRepair}
          onChange={distanceAfterRepairInputHandler}
        />
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
      </HStack>

      <Box h='100%' rounded='2xl' p='4' shadow='2xl' border='4px' borderColor='green.700'>
        <Stat h='100%'>
          <Stack>
            <StatLabel>
              <HStack>
                {!!(activeServices.length > 0) && (
                  <Circle size='30px' bg='green.700'>
                    {activeServices.length}
                  </Circle>
                )}
                <Text>Razem</Text>
              </HStack>
            </StatLabel>
            <StatNumber>{numberToOutputCurrencyString(activeServiceSummary)}</StatNumber>
            <StatHelpText>Całkowita wartość usług</StatHelpText>
          </Stack>
        </Stat>
      </Box>

      <HStack>
        <Tooltip hasArrow label='Resetuj wszystko'>
          <IconButton onClick={resetButtonHandler} aria-label='Resetuj wszystko'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip hasArrow label='Otwórz ustawienia'>
          <IconButton aria-label='Otwórz ustawienia'>
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </HStack>
    </Flex>
  )
}
