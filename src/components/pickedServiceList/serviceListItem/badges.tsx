import { Badge, VStack } from '@chakra-ui/react'
import { ServiceBadge } from '../../../store/servicesStore/servicesTypes'

type Props = {
  badges: ServiceBadge[]
  hasIncompatibleServices?: boolean
}

export const Badges = ({ badges, hasIncompatibleServices }: Props) => {
  const defaultBadges = badges.map((badge) => {
    return <Badge colorScheme='green'>{badge}</Badge>
  })

  const incompatibilityBadge = (
    <Badge colorScheme='purple' variant='outline'>
      Niekompatybilna
    </Badge>
  )

  const badgesToDisplay = hasIncompatibleServices ? incompatibilityBadge : defaultBadges

  return <VStack flexBasis={'10%'}>{badgesToDisplay}</VStack>
}
