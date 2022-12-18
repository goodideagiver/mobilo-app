import { HStack, Text } from '@chakra-ui/react'

import { textToCopyStyles, wrapperStyles } from './copyText.styles'
import { CopyTextButton } from './CopyTextButton'
import { useCopyText } from './useCopyText'

type Props = {
  textToCopy?: string
  hasError?: boolean
}

export const CopyText = ({ textToCopy, hasError }: Props) => {
  if (!textToCopy) return null

  const { errorStyle, hasCopied, textStyle, onCopy } = useCopyText(textToCopy, hasError)

  return (
    <HStack {...wrapperStyles} {...errorStyle}>
      <Text {...textStyle} {...textToCopyStyles}>
        {textToCopy}
      </Text>
      <CopyTextButton hasCopied={hasCopied} onCopy={onCopy} />
    </HStack>
  )
}
