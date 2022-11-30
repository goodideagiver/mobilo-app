import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  StatHelpText,
  StatNumber,
  Tooltip,
  VStack,
} from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  Stat,
  StatLabel,
  Text,
} from '@chakra-ui/react'

import { CloseIcon, CopyIcon, DeleteIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons'

import { useState } from 'react'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const optionsBeforeRepair = ['Holowanie z miejsca awarii', 'Auto zastępcze', 'Dojazd do miejsca awarii']

  const optionsAfterRepair = ['Bonus za naprawę na miejscu', 'Odwiezienie pojazdu', 'Opłata za dokumentację']

  const appHeader = (
    <Flex w="100%" align="center" justify="space-between" gap="2">
      <Tooltip hasArrow label="Menu z usługami">
        <IconButton aria-label="Pokaż usługi" onClick={() => setDrawerOpen(true)}>
          <HamburgerIcon />
        </IconButton>
      </Tooltip>

      <HStack h="100%" rounded="2xl" p="4" shadow="lg" border="4px" borderColor="gray.700" align="baseline">
        <FormControl>
          <FormLabel>Odległość</FormLabel>
          <Input type="number" value={100} onChange={() => console.log('siem')} />
          <FormHelperText>Odległość w jedną stronę (km)</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Odległość odwiezienia</FormLabel>
          <Input type="number" value={100} onChange={() => console.log('siem')} />
          <FormHelperText>Odległość w jedną stronę (km)</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel as="legend">Masa pojazdu</FormLabel>

          <RadioGroup defaultValue="0">
            <HStack spacing="24px">
              <Radio value="0">Poniżej 3.5t</Radio>
              <Radio value="1">3.5t - 5.5t</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Do rozliczania holowania</FormHelperText>
        </FormControl>
      </HStack>

      <Box h="100%" rounded="2xl" p="4" shadow="2xl" border="4px" borderColor="green.700">
        <Stat h="100%">
          <Stack>
            <StatLabel>Razem</StatLabel>
            <StatNumber>1000,65 zł</StatNumber>
            <StatHelpText>Całkowita wartość usług</StatHelpText>
          </Stack>
        </Stat>
      </Box>

      <HStack>
        <Tooltip hasArrow label="Resetuj wszystko">
          <IconButton aria-label="Resetuj wszystko">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip hasArrow label="Otwórz ustawienia">
          <IconButton aria-label="Otwórz ustawienia">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </HStack>
    </Flex>
  )

  const singleService = (
    <Flex
      gap="4"
      borderBottom="2px"
      borderColor="gray.600"
      p="2"
      px="4"
      align="center"
      justify="space-between"
      w="100%"
    >
      <Text fontWeight="bold" flex="1 1 1">
        Nazwa usługi
      </Text>
      <VStack>
        <Badge variant="solid" colorScheme="orange">
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
        <IconButton aria-label="Usuń usługę">
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  )

  const appServiceList = (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      {Array.from({ length: 2 }).map(() => singleService)}
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
