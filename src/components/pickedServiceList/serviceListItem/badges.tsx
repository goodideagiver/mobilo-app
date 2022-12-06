import { Badge, VStack } from '@chakra-ui/react'
import { ServiceBadge } from '../../../store/servicesStore/servicesTypes'

type Props = {
  badges: ServiceBadge[]
}

export const Badges = ({ badges }: Props) => {
  return (
    <VStack flexBasis={'10%'}>
      {badges.map((badge) => {
        return <Badge colorScheme="green">{badge}</Badge>
      })}
    </VStack>
  )
}
