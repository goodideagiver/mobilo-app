import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useServicesStore } from '../../../store/servicesStore/servicesStore'
import { Service } from '../../../store/servicesStore/servicesTypes'
import { Badges } from './badges'
import { CopyText } from './copyText'
import { DeleteServiceButton } from './deleteServiceButton'
import { PriceDisplay } from './priceDisplay'

type Props = {
  service: Service
  textToCopy?: string
  children?: ReactNode
  serviceId: string
  hasError?: boolean
}
export const ServiceListItem = ({ service, textToCopy, children, serviceId, hasError }: Props) => {
  const { title, price, badges } = service

  const serviceStore = useServicesStore((state) => state.services.find((service) => service.id === serviceId))

  const isActive = serviceStore?.active

  if (!isActive) return null

  const toggleService = useServicesStore((state) => state.toggleService)

  const deleteServiceButtonHandler = () => {
    toggleService(serviceId)
  }

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
      <Text fontWeight="bold" flex="1 1 10%">
        {title}
      </Text>
      <Badges badges={badges} />
      {children}
      <CopyText hasError={hasError} textToCopy={textToCopy} />
      <PriceDisplay price={price} />
      <DeleteServiceButton onDelete={deleteServiceButtonHandler} />
    </Flex>
  )
}
