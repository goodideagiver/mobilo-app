import { CloseIcon, CopyIcon } from '@chakra-ui/icons'
import { Badge, Flex, HStack, IconButton, Stat, StatLabel, StatNumber, Text, Tooltip, VStack } from '@chakra-ui/react'

type Props = {}
export const ServiceListItem = (props: Props) => {
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
        Nazwa usługi
      </Text>
      <VStack>
        <Badge variant="solid" colorScheme="orange">
          Po naprawie
        </Badge>
        <Badge variant="outline" colorScheme="blue">
          Ryczałt
        </Badge>
      </VStack>

      <HStack bg="chakra-body-bg" rounded="md" shadow="md" p="2">
        <Text>Tekst objaśniający do skopiowania</Text>
        <Tooltip hasArrow label="Skopiuj do schowka">
          <IconButton aria-label="Skopiuj do schowka">
            <CopyIcon />
          </IconButton>
        </Tooltip>
      </HStack>

      <Stat w="fit-content" flex="0 1 0">
        <StatLabel>Opłata</StatLabel>
        <StatNumber whiteSpace="nowrap">1000 zł</StatNumber>
      </Stat>
      <Tooltip hasArrow label="Usuń usługę">
        <IconButton aria-label="Usuń usługę">
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Flex>
  )
}
