import { DeleteIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
} from '@chakra-ui/react'

import { ChangeEventHandler } from 'react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

type Props = {
  drawerOpenHandler: () => void
}
export const AppHeader = ({ drawerOpenHandler }: Props) => {
  const { setDistanceAfterRepair, setDistanceBeforeRepair, settings, setVehicleWeight } = useServicesStore(
    (state) => state,
  )

  const distanceInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceBeforeRepair(Number(event.target.value))
  }

  const distanceAfterRepairInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceAfterRepair(Number(event.target.value))
  }

  const vehicleWeightInputHandler = (weight: string) => {
    if (weight === '1') {
      setVehicleWeight('3.5t-5.5t')
    } else {
      setVehicleWeight('below 3.5t')
    }
  }

  return (
    <Flex w="100%" align="center" justify="space-between" gap="2">
      <Tooltip hasArrow label="Menu z usługami">
        <IconButton aria-label="Pokaż usługi" onClick={drawerOpenHandler}>
          <HamburgerIcon />
        </IconButton>
      </Tooltip>

      <HStack h="100%" rounded="2xl" p="4" shadow="lg" border="4px" borderColor="gray.700" align="baseline">
        <FormControl>
          <FormLabel>Odległość</FormLabel>
          <Input type="number" value={settings.distanceBeforeRepair} onChange={distanceInputHandler} />
          <FormHelperText>Odległość w jedną stronę (km)</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Odległość odwiezienia</FormLabel>
          <Input type="number" value={100} onChange={() => console.log('siem')} />
          <FormHelperText>Odległość w jedną stronę (km)</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel as="legend">Masa pojazdu</FormLabel>

          <RadioGroup onChange={vehicleWeightInputHandler} defaultValue="0">
            <HStack spacing="24px">
              <Radio value="0">Poniżej 3.5t</Radio>
              <Radio value="1">3.5t - 5.5t</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Do rozliczania holowania</FormHelperText>
        </FormControl>
      </HStack>

      <Box h="100%" rounded="2xl" p="4" shadow="2xl" border="4px" borderColor="green.700">
        <Stat h="100%">
          <Stack>
            <StatLabel>Razem</StatLabel>
            <StatNumber>1000,65 zł</StatNumber>
            <StatHelpText>Całkowita wartość usług</StatHelpText>
          </Stack>
        </Stat>
      </Box>

      <HStack>
        <Tooltip hasArrow label="Resetuj wszystko">
          <IconButton aria-label="Resetuj wszystko">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip hasArrow label="Otwórz ustawienia">
          <IconButton aria-label="Otwórz ustawienia">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </HStack>
    </Flex>
  )
}
