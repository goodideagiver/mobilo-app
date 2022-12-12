import { Flex, HStack } from '@chakra-ui/react'

import { ChangeEventHandler } from 'react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { DrawerButton } from './DrawerButton'
import { HeaderNumberInput } from './headerNumberInput'
import { MainHeaderButtons } from './MainHeaderButtons'
import { ServicesSummary } from './ServicesSummary'
import { VehicleMassToggle } from './VehicleMassToggle/VehicleMassToggle'

type Props = {
  drawerOpenHandler: () => void
}

export const AppHeader = ({ drawerOpenHandler }: Props) => {
  const { setDistanceAfterRepair, setDistanceBeforeRepair, settings, services } = useServicesStore((state) => state)

  const distanceInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceBeforeRepair(Number(event.target.value))
  }

  const distanceAfterRepairInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistanceAfterRepair(Number(event.target.value))
  }

  const activeServices = services.filter((service) => service.active)

  const activeServiceSummary = activeServices.reduce((prev, curr) => prev + curr.price, 0)

  return (
    <Flex w='100%' align='center' justify='space-between' gap='2'>
      <DrawerButton drawerOpenHandler={drawerOpenHandler} />

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
        <VehicleMassToggle />
      </HStack>
      <ServicesSummary activeServices={activeServices} activeServiceSummary={activeServiceSummary} />
      <MainHeaderButtons />
    </Flex>
  )
}
