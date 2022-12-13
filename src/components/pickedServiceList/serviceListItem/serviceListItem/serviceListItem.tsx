import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Service } from '../../../../store/servicesStore/servicesTypes'
import { Badges } from '../badges'
import { CopyText } from '../copyText/copyText'
import { DeleteServiceButton } from '../deleteServiceButton'
import { PriceDisplay } from '../priceDisplay'
import { useServiceListItem } from './useServiceListItem'

type Props = {
  service: Service
  textToCopy?: string
  children?: ReactNode
  serviceId: string
  hasError?: boolean
  cantBeMixedWith?: string[]
}

const wrapperStyles = {
  gap: '4',
  borderBottom: '2px',
  borderColor: 'gray.600',
  p: '2',
  px: '4',
  align: 'center',
  justify: 'space-between',
  w: '100%',
}

export const ServiceListItem = ({ service, textToCopy, children, serviceId, hasError, cantBeMixedWith }: Props) => {
  const { title, price, badges } = service

  const { bgColor, conflictingServicesText, deleteServiceButtonHandler, hasErrors, isActive } = useServiceListItem(
    serviceId,
    cantBeMixedWith,
  )

  if (!isActive) return null

  return (
    <Flex {...wrapperStyles} bg={bgColor}>
      <Text fontWeight='bold' flex='1 0 100px'>
        {title}
      </Text>
      {children}
      <Badges hasIncompatibleServices={hasErrors} badges={badges} />
      <CopyText hasError={hasError || hasErrors} textToCopy={hasErrors ? conflictingServicesText : textToCopy} />
      <PriceDisplay price={price} />
      <DeleteServiceButton onDelete={deleteServiceButtonHandler} />
    </Flex>
  )
}
