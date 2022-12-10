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
}

const wrapperErrorStyle = {
  border: '2px',
  borderColor: 'red.700',
}

const replacePolishChars = (text: string) => {
  const polishChars: {
    [key: string]: string
  } = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  }

  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => polishChars[char])
    .toUpperCase()
}

export const CopyText = ({ textToCopy, hasError }: Props) => {
  if (!textToCopy) return null

  const { onCopy, hasCopied } = useClipboard(replacePolishChars(textToCopy))

  const buttonIcon = hasCopied ? <CheckIcon /> : <CopyIcon />

  const errorStyle = hasError ? wrapperErrorStyle : {}

  const textStyle = hasError ? textErrorStyle : {}

  console.log({ normal: textToCopy, replaced: replacePolishChars(textToCopy) })

  return (
    <HStack
      justifyContent={'space-between'}
      flex="0 0 350px"
      bg="chakra-body-bg"
      rounded="md"
      shadow="md"
      p="2"
      {...errorStyle}
    >
      <Text {...textStyle} fontSize={'xs'} fontFamily="mono" maxH="4em" overflow={'auto'}>
        {replacePolishChars(textToCopy)}
      </Text>
      <CopyTooltip hasCopied={hasCopied}>
        <IconButton onClick={onCopy} aria-label="Skopiuj do schowka">
          {buttonIcon}
        </IconButton>
      </CopyTooltip>
    </HStack>
  )
}
