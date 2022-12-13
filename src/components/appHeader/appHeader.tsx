import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'

import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { AppHeaderControls } from './AppHeaderControls/AppHeaderControls'
import { DrawerButton } from './DrawerButton'
import { MainHeaderButtons } from './MainHeaderButtons'
import { ServicesSummary } from './ServicesSummary'

import { useQuery } from 'react-query'
import { getEuroCourse } from '../../api/getEuroCourse'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'

type Props = {
  drawerOpenHandler: () => void
}

export const AppHeader = ({ drawerOpenHandler }: Props) => {
  const services = useServicesStore((state) => state.services)

  const activeServices = services.filter((service) => service.active)

  const activeServiceSummary = activeServices.reduce((prev, curr) => prev + curr.price, 0)

  const { data, isFetching, error, isLoading } = useQuery({
    queryKey: 'euroRate',
    queryFn: () => getEuroCourse(),
  })

  return (
    <Flex w='100%' align='center' justify='space-between' gap='2'>
      <DrawerButton drawerOpenHandler={drawerOpenHandler} />
      <AppHeaderControls />
      <Box flex='1 0 5%' rounded='2xl' border='4px' borderColor='blue.800' h='100%'>
        <Center h='100%'>
          <VStack>
            <Text fontWeight='bold'>Kurs EUR:</Text>
            <Text>{numberToOutputCurrencyString(data?.rate)}</Text>
          </VStack>
        </Center>
      </Box>
      <ServicesSummary activeServices={activeServices} activeServiceSummary={activeServiceSummary} />
      <MainHeaderButtons />
    </Flex>
  )
}
