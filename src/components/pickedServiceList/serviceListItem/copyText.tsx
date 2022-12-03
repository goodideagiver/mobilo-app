import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Text } from '@chakra-ui/react'

import { useClipboard } from '@chakra-ui/react'
import { CopyTooltip } from '../../ui/copyTooltip'

type Props = {
  textToCopy?: string
}

export const CopyText = ({ textToCopy }: Props) => {
  if (!textToCopy) return null

  const { onCopy, hasCopied } = useClipboard(textToCopy)

  const buttonIcon = hasCopied ? <CheckIcon /> : <CopyIcon />

  return (
    <HStack bg="chakra-body-bg" rounded="md" shadow="md" p="2">
      <Text>{textToCopy}</Text>
      <CopyTooltip hasCopied={hasCopied}>
        <IconButton onClick={onCopy} aria-label="Skopiuj do schowka">
          {buttonIcon}
        </IconButton>
      </CopyTooltip>
    </HStack>
  )
}
