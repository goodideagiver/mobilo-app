import { Stack, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

import { AppHeader } from './components/appHeader/appHeader'
import { PickedServiceList } from './components/pickedServiceList/pickedServiceList'
import { ServicePickDrawer } from './components/servicePickDrawer/servicePickDrawer'
import { SummaryModal } from './components/summaryModal/SummaryModal'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack overflow='hidden' padding='4' gap='16px' h='100vh'>
      <AppHeader summaryOpenHandler={onOpen} drawerOpenHandler={() => setDrawerOpen(true)} />
      <PickedServiceList drawerOpenHandler={() => setDrawerOpen(true)} />
      <ServicePickDrawer isOpen={drawerOpen} drawerCloseHandler={() => setDrawerOpen(false)} />
      <SummaryModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}

export default App
