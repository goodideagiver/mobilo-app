import { Badge, VStack } from '@chakra-ui/react'
import { ServiceBadge } from '../../../store/servicesStore/servicesTypes'

type Props = {
  badges: ServiceBadge[]
  hasIncompatibleServices?: boolean
}

export const Badges = ({ badges, hasIncompatibleServices }: Props) => {
  const badgesToDisplay = hasIncompatibleServices ? (
    <Badge colorScheme='purple' variant='outline'>
      Niekompatybilna
    </Badge>
  ) : (
    badges.map((badge) => {
      return <Badge colorScheme='green'>{badge}</Badge>
    })
  )

  return <VStack flexBasis={'10%'}>{badgesToDisplay}</VStack>
}
