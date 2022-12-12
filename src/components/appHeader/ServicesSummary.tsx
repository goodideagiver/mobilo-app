import { Box, Circle, HStack, Stack, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { numberToOutputCurrencyString } from '../../helpers/numberToOutputCurrencyString'
import { SingleService } from '../../store/servicesStore/servicesStore'

type Props = {
  activeServices: SingleService[]
  activeServiceSummary: number
}

export const ServicesSummary = ({ activeServiceSummary, activeServices }: Props) => (
  <Box h='100%' rounded='2xl' p='4' shadow='2xl' border='4px' borderColor='green.700'>
    <Stat h='100%'>
      <Stack>
        <StatLabel>
          <HStack>
            {!!(activeServices.length > 0) && (
              <Circle size='30px' bg='green.700'>
                {activeServices.length}
              </Circle>
            )}
            <Text>Razem</Text>
          </HStack>
        </StatLabel>
        <StatNumber>{numberToOutputCurrencyString(activeServiceSummary)}</StatNumber>
        <StatHelpText>Całkowita wartość usług</StatHelpText>
      </Stack>
    </Stat>
  </Box>
)
