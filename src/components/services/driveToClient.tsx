import { HStack, Input } from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ServiceListItem } from '../pickedServiceList/serviceListItem/serviceListItem'

export const DriveToClient = () => {
  const driveToClientServiceStore = useServicesStore((state) => state.services.find((service) => service.id === '3'))

  const isActive = driveToClientServiceStore?.active

  if (!isActive) return null

  return (
    <ServiceListItem
      serviceId="3"
      service={{
        active: true,
        badges: ['przed naprawą'],
        price: 100,
        title: 'Dojazd do miejsca awarii',
        preventCombineGroup: null,
        serviceType: 'before repair',
      }}
      textToCopy={`CZAS PRACY MECHANIKA 1 h X STAWKA GWR 210 zł/h +50 KM X 5,85zł netto = 502,5 zł
`}
    >
      <HStack>
        <Input placeholder="RBH" type="number" />
        <Input placeholder="stawka" type="number" />
      </HStack>
    </ServiceListItem>
  )
}
