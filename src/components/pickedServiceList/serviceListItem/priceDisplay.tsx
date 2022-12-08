import { CheckIcon } from '@chakra-ui/icons'
import { Stat, StatLabel, StatNumber, useClipboard } from '@chakra-ui/react'
import { CopyTooltip } from '../../ui/copyTooltip'

type Props = {
  price: number
}

export const PriceDisplay = ({ price }: Props) => {
  const priceFormatted = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(price)

  const { onCopy, hasCopied } = useClipboard(price.toFixed(2))

  const buttonContent = hasCopied ? <CheckIcon /> : priceFormatted

  return (
    <Stat display={'flex'} justifyContent="center" w="fit-content" flex="0 0 120px">
      <CopyTooltip hasCopied={hasCopied}>
        <button onClick={onCopy}>
          <StatLabel>Opłata</StatLabel>
          <StatNumber whiteSpace="nowrap">{buttonContent}</StatNumber>
        </button>
      </CopyTooltip>
    </Stat>
  )
}
