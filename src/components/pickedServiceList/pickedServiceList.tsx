import { Stack } from '@chakra-ui/react'
import { ServiceListItem } from './serviceListItem'

type Props = {}
export const PickedServiceList = (props: Props) => {
  return (
    <Stack overflowY="auto" shadow="dark-lg" rounded="xl" flex="1" h="100%" bg="chakra-subtle-bg">
      {Array.from({ length: 2 }).map(() => (
        <ServiceListItem />
      ))}
    </Stack>
  )
}
