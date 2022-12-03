import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'

const optionsBeforeRepair = ['Holowanie z miejsca awarii', 'Auto zastępcze', 'Dojazd do miejsca awarii']

const optionsAfterRepair = ['Bonus za naprawę na miejscu', 'Odwiezienie pojazdu', 'Opłata za dokumentację']

type Props = {
  isOpen: boolean
  drawerCloseHandler: () => void
}
export const ServicePickDrawer = ({ isOpen, drawerCloseHandler }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={drawerCloseHandler}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Wybierz usługę mobilności</DrawerHeader>

        <DrawerBody>
          <Stack align={'center'} h="100%">
            <Text>Usługi przed naprawą</Text>
            {optionsBeforeRepair.map((option) => (
              <Button width="100%" key={option} placeholder={option}>
                {option}
              </Button>
            ))}
            <Divider />
            <Text>Usługi po naprawie</Text>
            {optionsAfterRepair.map((option) => (
              <Button width="100%" key={option} placeholder={option}>
                {option}
              </Button>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
