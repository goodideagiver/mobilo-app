import { Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  hasCopied: boolean
}

export const CopyTooltip = ({ children, hasCopied }: Props) => {
  const labelText = hasCopied ? 'Skopiowano' : 'Skopiuj'

  const tooltipBg = hasCopied ? 'green.500' : 'gray.500'

  return (
    <Tooltip closeOnClick={false} bg={tooltipBg} hasArrow label={labelText}>
      {children}
    </Tooltip>
  )
}
