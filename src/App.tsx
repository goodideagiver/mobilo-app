import { Badge, Button, Divider, HStack, IconButton, StatNumber, Tooltip, VStack } from '@chakra-ui/react'

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
  Stat,
  StatLabel,
  Text,
} from '@chakra-ui/react'

import { CloseIcon, CopyIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'

import { useState } from 'react'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const optionsBeforeRepair = ['Holowanie z miejsca awarii', 'Auto zastępcze', 'Dojazd do miejsca awarii']

  const optionsAfterRepair = ['Bonus za naprawę na miejscu', 'Odwiezienie < 50 km', 'Opłata za dokumentację']

  const appHeader = (
    <Flex align="center">
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

  const singleService = (
    <Flex
      gap="4"
      borderBottom="2px"
      borderColor="gray.600"
      p="1"
      px="4"
      align="center"
      justify="space-between"
      w="100%"
    >
      <Text fontWeight="bold" flex="1 1 1">
        Nazwa usługi
      </Text>
      <VStack>
        <Badge variant="outline" colorScheme="orange">
          Po naprawie
        </Badge>
        <Badge variant="outline" colorScheme="blue">
          Ryczałt
        </Badge>
      </VStack>

      <HStack bg="chakra-body-bg" rounded="md" shadow="md" p="2">
        <Text>Tekst objaśniający do skopiowania</Text>
        <Tooltip hasArrow label="Skopiuj do schowka">
          <IconButton aria-label="Skopiuj do schowka">
            <CopyIcon />
          </IconButton>
        </Tooltip>
      </HStack>

      <Stat w="fit-content" flex="0 1 0">
        <StatLabel>Opłata</StatLabel>
        <StatNumber whiteSpace="nowrap">1000 zł</StatNumber>
      </Stat>
      <Tooltip hasArrow label="Usuń usługę">
        <IconButton rounded="3xl" colorScheme="purple" aria-label="Usuń usługę">
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  )

  const appServiceList = (
    <Stack overflowY="auto" shadow="dark-lg" rounded="base" flex="1" h="100%" bg="chakra-subtle-bg">
      {Array.from({ length: 10 }).map(() => singleService)}
    </Stack>
  )

  const servicesDrawer = (
    <Drawer isOpen={drawerOpen} placement="left" onClose={() => setDrawerOpen(false)}>
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
    <Stack overflow="hidden" padding="4" gap="16px" h="100vh">
      {appHeader}
      {appServiceList}
      {servicesDrawer}
    </Stack>
  )
}

export default App
