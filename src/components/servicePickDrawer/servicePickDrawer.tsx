import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

type Props = {
  isOpen: boolean
  drawerCloseHandler: () => void
}

const CategoryWrapper = ({ children, text }: { children: ReactNode; text: string }) => {
  return (
    <Stack bg="gray.800" shadow={'lg'} w="100%" p="2" rounded={'md'}>
      <Text>{text}</Text>
      {children}
    </Stack>
  )
}
type ServiceButtonProps = {
  children: ReactNode
  onClick: () => void
  active: boolean
}

const ServiceButton = ({ active, children, onClick }: ServiceButtonProps) => (
  <Button border="4px" borderColor={active ? 'green.500' : 'transparent'} onClick={onClick} width="100%">
    {children}
  </Button>
)

export const ServicePickDrawer = ({ isOpen, drawerCloseHandler }: Props) => {
  const services = useServicesStore((state) => state.services)
  const toggleService = useServicesStore((state) => state.toggleService)

  const [servicesBeforeRepair, servicesAfterRepair] = services.reduce(
    (splitServices, service) => {
      if (service.beforeRepair) {
        splitServices[0].push(service)
      } else {
        splitServices[1].push(service)
      }
      return splitServices
    },
    [[], []] as [typeof services, typeof services],
  )

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={drawerCloseHandler}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Wybierz usługę mobilności</DrawerHeader>

        <DrawerBody p="2">
          <Stack gap="4" align={'center'} h="100%">
            <CategoryWrapper text="Przed naprawą">
              {servicesBeforeRepair.map((option) => {
                return (
                  <ServiceButton active={option.active} onClick={() => toggleService(option.id)} key={option.id}>
                    {option.title}
                  </ServiceButton>
                )
              })}
            </CategoryWrapper>
            <CategoryWrapper text="Po naprawie">
              {servicesAfterRepair.map((option) => {
                return (
                  <ServiceButton active={option.active} onClick={() => toggleService(option.id)} key={option.id}>
                    {option.title}
                  </ServiceButton>
                )
              })}
            </CategoryWrapper>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
