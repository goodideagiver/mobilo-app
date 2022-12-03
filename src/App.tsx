import { Stack } from '@chakra-ui/react'

import { useState } from 'react'
import { AppHeader } from './components/appHeader/appHeader'
import { PickedServiceList } from './components/pickedServiceList/pickedServiceList'
import { ServicePickDrawer } from './components/servicePickDrawer/servicePickDrawer'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Stack overflow="hidden" padding="4" gap="16px" h="100vh">
      <AppHeader drawerOpenHandler={() => setDrawerOpen(true)} />
      <PickedServiceList
        services={[
          {
            title: 'siem',
            price: 100,
            preventCombineGroup: 'siem',
            serviceType: 'before repair',
            active: true,
            badges: ['ryczałt', 'po naprawie'],
            serviceSummaryText: 'siem',
          },
        ]}
      />
      <ServicePickDrawer isOpen={drawerOpen} drawerCloseHandler={() => setDrawerOpen(false)} />
    </Stack>
  )
}

export default App
