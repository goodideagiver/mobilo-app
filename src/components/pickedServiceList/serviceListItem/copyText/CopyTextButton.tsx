import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

import { CopyTooltip } from '../../../ui/copyTooltip'

type Props = {
  hasCopied: boolean
  onCopy: () => void
}

export const CopyTextButton = ({ hasCopied, onCopy }: Props) => {
  const buttonIcon = hasCopied ? <CheckIcon /> : <CopyIcon />

  return (
    <CopyTooltip hasCopied={hasCopied}>
      <IconButton onClick={onCopy} aria-label='Skopiuj do schowka'>
        {buttonIcon}
      </IconButton>
    </CopyTooltip>
  )
}
