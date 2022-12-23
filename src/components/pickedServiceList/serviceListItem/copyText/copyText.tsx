import { HStack, Text } from '@chakra-ui/react'
import { CopyTextPopover } from '../../../ui/copyTextPopover'

import { textToCopyStyles, wrapperStyles } from './copyText.styles'
import { CopyTextButton } from './CopyTextButton'
import { useCopyText } from './useCopyText'

type Props = {
  textToCopy?: string
  hasError?: boolean
}

export const CopyText = ({ textToCopy, hasError }: Props) => {
  const { errorStyle, hasCopied, textStyle, onCopy } = useCopyText(textToCopy, hasError)

  if (!textToCopy) return null

  return (
    <HStack {...wrapperStyles} {...errorStyle}>
      <CopyTextPopover onCopy={onCopy} text={textToCopy}>
        <Text {...textStyle} {...textToCopyStyles}>
          {textToCopy.split('|').map((text) => (
            <p>{text}</p>
          ))}
        </Text>
      </CopyTextPopover>
      <CopyTextButton hasCopied={hasCopied} onCopy={onCopy} />
    </HStack>
  )
}
