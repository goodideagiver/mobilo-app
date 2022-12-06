import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

const optionsBeforeRepair = ['Holowanie z miejsca awarii', 'Auto zastępcze', 'Dojazd do miejsca awarii']

const optionsAfterRepair = ['Bonus za naprawę na miejscu', 'Odwiezienie pojazdu', 'Opłata za dokumentację']

type Props = {
  isOpen: boolean
  drawerCloseHandler: () => void
}
export const ServicePickDrawer = ({ isOpen, drawerCloseHandler }: Props) => {
  const services = useServicesStore((state) => state.services)
  const toggleService = useServicesStore((state) => state.toggleService)

  const unpickedServices = services.filter((service) => !service.active)

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={drawerCloseHandler}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Wybierz usługę mobilności</DrawerHeader>

        <DrawerBody>
          <Stack align={'center'} h="100%">
            {unpickedServices.map((option) => (
              <Button onClick={() => toggleService(option.id)} width="100%" key={option.id} placeholder={option.title}>
                {option.title}
              </Button>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
