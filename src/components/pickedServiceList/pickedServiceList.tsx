import { AddIcon } from '@chakra-ui/icons'
import { Button, Center, HStack, ScaleFade, Stack, Text } from '@chakra-ui/react'
import { SHORTCUT_KEYS } from '../../constants/shortcutKeys'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { DocumentationBonus } from '../services/documentationBonus'
import { DriveToClient } from '../services/driveToClient'
import { RentCar } from '../services/rentCar'
import { RepairOnSiteBonus } from '../services/repairOnSiteBonus'
import { TowBack } from '../services/towBack'
import { Towing } from '../services/towing'
import { ModifierKeyDisplay } from '../ui/ModifierKeyDisplay'

type Props = {
  drawerOpenHandler: () => void
}

export const PickedServiceList = ({ drawerOpenHandler }: Props) => {
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
      <HStack>
        <ScaleFade in>
          <ModifierKeyDisplay callback={drawerOpenHandler} keyboardKey={SHORTCUT_KEYS.SHOW_DRAWER}>
            <Button display='flex' gap='.4rem' rounded='3xl' onClick={drawerOpenHandler}>
              <AddIcon />
              <Text>Dodaj usługę</Text>
            </Button>
          </ModifierKeyDisplay>
        </ScaleFade>
      </HStack>
    </Center>
  )

  return (
    <Stack
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
