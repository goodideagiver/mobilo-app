import { Stack } from '@chakra-ui/react'
import { Service } from '../../store/servicesStore/servicesTypes'
import { ServiceListItem } from './serviceListItem/serviceListItem'

type Props = {
  services: Service[]
}
export const PickedServiceList = ({ services }: Props) => {
  return (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      {services.map((service) => {
        return <ServiceListItem service={service} />
      })}
    </Stack>
  )
}
