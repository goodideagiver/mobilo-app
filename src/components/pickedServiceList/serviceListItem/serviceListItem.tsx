import { Flex, Text } from '@chakra-ui/react'
import { Service } from '../../../store/servicesStore/servicesTypes'
import { Badges } from './badges'
import { CopyText } from './copyText'
import { DeleteServiceButton } from './deleteServiceButton'
import { PriceDisplay } from './priceDisplay'

type Props = {
  service: Service
}
export const ServiceListItem = ({ service }: Props) => {
  const { title, price, badges } = service

  return (
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
        {title}
      </Text>
      <Badges badges={badges} />
      <CopyText textToCopy="lorem ipsum" />
      <PriceDisplay price={price} />
      <DeleteServiceButton onDelete={() => console.log('delete')} />
    </Flex>
  )
}
