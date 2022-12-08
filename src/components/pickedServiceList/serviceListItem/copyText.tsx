import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Text } from '@chakra-ui/react'

import { useClipboard } from '@chakra-ui/react'
import { CopyTooltip } from '../../ui/copyTooltip'

type Props = {
  textToCopy?: string
  hasError?: boolean
}

const textErrorStyle = {
  fontStyle: 'italic',
  color: 'red.700',
}

const wrapperErrorStyle = {
  border: '2px',
  borderColor: 'red.700',
}

export const CopyText = ({ textToCopy, hasError }: Props) => {
  if (!textToCopy) return null

  const { onCopy, hasCopied } = useClipboard(textToCopy)

  const buttonIcon = hasCopied ? <CheckIcon /> : <CopyIcon />

  const errorStyle = hasError ? wrapperErrorStyle : {}

  const textStyle = hasError ? textErrorStyle : {}

  return (
    <HStack
      justifyContent={'space-between'}
      flex="0 0 350px"
      {...errorStyle}
      bg="chakra-body-bg"
      rounded="md"
      shadow="md"
      p="2"
    >
      <Text {...textStyle} maxH="4em" overflow={'auto'}>
        {textToCopy}
      </Text>
      <CopyTooltip hasCopied={hasCopied}>
        <IconButton onClick={onCopy} aria-label="Skopiuj do schowka">
          {buttonIcon}
        </IconButton>
      </CopyTooltip>
    </HStack>
  )
}
