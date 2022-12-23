import { useClipboard } from '@chakra-ui/react'
import { replacePolishChars } from '../replacePolishChars'
import { textErrorStyle, wrapperErrorStyle } from './copyText.styles'

export const useCopyText = (textToCopy: string = '', hasError?: boolean) => {
  const formattedText = replacePolishChars(textToCopy)
    .split('|')
    .map((line) => line.trim())
    .join('\n')
    .trim()

  const { onCopy: copyFunc, hasCopied } = useClipboard(formattedText)

  const errorStyle = hasError ? wrapperErrorStyle : {}

  const textStyle = hasError ? textErrorStyle : {}

  const onCopy = () => {
    copyFunc()
    navigator.clipboard.writeText(formattedText)
  }

  return {
    onCopy,
    hasCopied,
    errorStyle,
    textStyle,
  }
}
