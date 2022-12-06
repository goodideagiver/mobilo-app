import { Stack } from '@chakra-ui/react'
import { DocumentationBonus } from '../services/documentationBonus'
import { DriveToClient } from '../services/driveToClient'
import { RentCar } from '../services/rentCar'
import { RepairOnSiteBonus } from '../services/repairOnSiteBonus'
import { TowBack } from '../services/towBack'
import { Towing } from '../services/towing'

export const PickedServiceList = () => {
  return (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      <DocumentationBonus />
      <Towing />
      <RentCar />
      <DriveToClient />
      <RepairOnSiteBonus />
      <TowBack />
    </Stack>
  )
}
