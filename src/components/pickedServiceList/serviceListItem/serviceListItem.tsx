import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Service } from '../../../store/servicesStore/servicesTypes'
import { Badges } from './badges'
import { CopyText } from './copyText'
import { DeleteServiceButton } from './deleteServiceButton'
import { PriceDisplay } from './priceDisplay'

type Props = {
  service: Service
  textToCopy?: string
  children?: ReactNode
}
export const ServiceListItem = ({ service, textToCopy, children }: Props) => {
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
      {children}
      <CopyText textToCopy={textToCopy} />
      <PriceDisplay price={price} />
      <DeleteServiceButton onDelete={() => console.log('delete')} />
    </Flex>
  )
}
