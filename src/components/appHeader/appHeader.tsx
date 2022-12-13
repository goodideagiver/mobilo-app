import { Flex } from '@chakra-ui/react'

import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { AppHeaderControls } from './AppHeaderControls/AppHeaderControls'
import { DrawerButton } from './DrawerButton'
import { MainHeaderButtons } from './MainHeaderButtons'
import { ServicesSummary } from './ServicesSummary'

type Props = {
  drawerOpenHandler: () => void
}

export const AppHeader = ({ drawerOpenHandler }: Props) => {
  const services = useServicesStore((state) => state.services)

  const activeServices = services.filter((service) => service.active)

  const activeServiceSummary = activeServices.reduce((prev, curr) => prev + curr.price, 0)

  return (
    <Flex w='100%' align='center' justify='space-between' gap='2'>
      <DrawerButton drawerOpenHandler={drawerOpenHandler} />
      <AppHeaderControls />
      <ServicesSummary activeServices={activeServices} activeServiceSummary={activeServiceSummary} />
      <MainHeaderButtons />
    </Flex>
  )
}
