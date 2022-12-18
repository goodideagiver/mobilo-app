import { useClipboard } from '@chakra-ui/react'
import { replacePolishChars } from '../replacePolishChars'
import { textErrorStyle, wrapperErrorStyle } from './copyText.styles'

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
