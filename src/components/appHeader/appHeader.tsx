import { Box, Center, Flex, Text, useMediaQuery, VStack } from '@chakra-ui/react'

import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { AppHeaderControls } from './AppHeaderControls/AppHeaderControls'
import { DrawerButton } from './DrawerButton'
import { MainHeaderButtons } from './MainHeaderButtons'
import { ServicesSummary } from './ServicesSummary'

type Props = {
  drawerOpenHandler: () => void
  summaryOpenHandler: () => void
}

export const AppHeader = ({ drawerOpenHandler, summaryOpenHandler }: Props) => {
  const services = useServicesStore((state) => state.services)

  const activeServices = services.filter((service) => service.active)

  const activeServiceSummary = activeServices.reduce((prev, curr) => prev + curr.price, 0)

  const euroRate = useServicesStore((state) => state.euroCourse)

  const euroRateIsSet = Boolean(euroRate.rate && euroRate.rate > 0)

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const padding = isLargerThan800 ? '0' : '8'

  return (
    <Flex padding={padding} w='100%' align='center' justify='space-between' gap='2'>
      <DrawerButton drawerOpenHandler={drawerOpenHandler} />
      <AppHeaderControls />
      {euroRateIsSet && (
        <Box padding='2' rounded='2xl' border='4px' borderColor='blue.800' h='100%'>
          <Center h='100%'>
            <VStack>
              <Text fontWeight='bold'>Kurs EUR:</Text>
              <Text>{numberToOutputCurrencyString(euroRate.rate)}</Text>
            </VStack>
          </Center>
        </Box>
      )}
      <ServicesSummary activeServices={activeServices} activeServiceSummary={activeServiceSummary} />
      <MainHeaderButtons summaryOpenHandler={summaryOpenHandler} />
    </Flex>
  )
}
