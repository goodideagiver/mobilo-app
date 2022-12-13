import { useClipboard } from '@chakra-ui/react'
import { textErrorStyle, wrapperErrorStyle } from './copyText.styles'
import { replacePolishChars } from './replacePolishChars'

export const useCopyText = (textToCopy: string, hasError?: boolean) => {
  const { onCopy, hasCopied } = useClipboard(replacePolishChars(textToCopy))

  const errorStyle = hasError ? wrapperErrorStyle : {}

  const textStyle = hasError ? textErrorStyle : {}

  return {
    onCopy,
    hasCopied,
    errorStyle,
    textStyle,
  }
}
