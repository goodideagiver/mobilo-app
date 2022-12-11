import { Center, Stack, Text } from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { DocumentationBonus } from '../services/documentationBonus'
import { DriveToClient } from '../services/driveToClient'
import { RentCar } from '../services/rentCar'
import { RepairOnSiteBonus } from '../services/repairOnSiteBonus'
import { TowBack } from '../services/towBack'
import { Towing } from '../services/towing'

export const PickedServiceList = () => {
  const hasServicesToDisplay =
    useServicesStore((state) => state.services).filter((service) => service.active).length > 0

  const services = (
    <>
      <DocumentationBonus />
      <Towing serviceId='1' />
      <RentCar />
      <DriveToClient />
      <RepairOnSiteBonus />
      <TowBack />
    </>
  )

  const noPickedServiceMessage = (
    <Center h='100%'>
      <Text fontSize='2xl' fontWeight='bold' fontStyle='italic'>
        Nie wybrano jeszcze żadnej usługi
      </Text>
    </Center>
  )

  return (
    <Stack
      opacity={hasServicesToDisplay ? '1' : '0.5'}
      border='2px'
      borderColor='gray.600'
      overflowY='auto'
      shadow='dark-lg'
      rounded='xl'
      transition='opacity 0.3s ease-in-out'
      flex='1'
      h='100%'
      bg='chakra-subtle-bg'
    >
      {hasServicesToDisplay ? services : noPickedServiceMessage}
    </Stack>
  )
}
