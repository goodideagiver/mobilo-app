import { Box, Circle, HStack, Stack, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { SingleService } from '../../store/servicesStore/servicesTypes'
import { useExtendedInfoStore } from '../../store/uiStore/extendedInfoStore'

type Props = {
  activeServices: SingleService[]
  activeServiceSummary: number
}

export const ServicesSummary = ({ activeServiceSummary, activeServices }: Props) => {
  const numberOfActiveServices = activeServices.length

  const hasActiveServices = numberOfActiveServices > 0

  const formattedCombinedCost = numberToOutputCurrencyString(activeServiceSummary)

  const extendedInfoActive = useExtendedInfoStore((state) => state.extendedInfo)

  return (
    <Box h='100%' rounded='2xl' p='4' shadow='2xl' border='4px' borderColor='green.700'>
      <Stat h='100%'>
        <Stack>
          <StatLabel>
            <HStack>
              {hasActiveServices && (
                <Circle size='30px' bg='green.700'>
                  {numberOfActiveServices}
                </Circle>
              )}
              <Text>Razem</Text>
            </HStack>
          </StatLabel>
          <StatNumber>{formattedCombinedCost}</StatNumber>
          {extendedInfoActive && <StatHelpText>Całkowita wartość usług</StatHelpText>}
        </Stack>
      </Stat>
    </Box>
  )
}
