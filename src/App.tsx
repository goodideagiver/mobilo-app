import { Button } from '@chakra-ui/react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'

import { HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'

import { useState } from 'react'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const optionsBeforeRepair = ['Holowanie z miejsca awarii', 'Auto zastępcze', 'Dojazd do miejsca awarii']

  const optionsAfterRepair = ['Bonus za naprawę na miejscu', 'Odwiezienie < 50 km']

  const appHeader = (
    <Flex align="center" padding={'16px'} gap="">
      <Button onClick={() => setDrawerOpen(true)}>
        <HamburgerIcon />
      </Button>
      <Spacer />
      <Box>Dane finansowe apki</Box>
      <Spacer />
      <Button>
        <SettingsIcon />
      </Button>
    </Flex>
  )

  const servicesDrawer = (
    <Drawer isOpen={drawerOpen} placement="left" onClose={() => setDrawerOpen(false)}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Wybierz usługę mobilności</DrawerHeader>

        <DrawerBody>
          <Stack align={'center'}>
            <Text>Usługi przed naprawą</Text>
            {optionsBeforeRepair.map((option) => (
              <Button width="100%" key={option} placeholder={option}>
                {option}
              </Button>
            ))}
            <Text>Usługi po naprawie</Text>
            {optionsAfterRepair.map((option) => (
              <Button width="100%" key={option} placeholder={option}>
                {option}
              </Button>
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={() => setDrawerOpen(false)}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )

  return (
    <>
      {appHeader}
      {servicesDrawer}
    </>
  )
}

export default App
