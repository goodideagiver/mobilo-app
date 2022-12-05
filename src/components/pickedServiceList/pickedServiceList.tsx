import { Stack } from '@chakra-ui/react'
import { Service } from '../../store/servicesStore/servicesTypes'
import { DocumentationBonus } from '../services/documentationBonus'
import { Towing } from '../services/towing'

type Props = {
  services: Service[]
}
export const PickedServiceList = ({ services }: Props) => {
  return (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      <DocumentationBonus />
      <Towing />
    </Stack>
  )
}
