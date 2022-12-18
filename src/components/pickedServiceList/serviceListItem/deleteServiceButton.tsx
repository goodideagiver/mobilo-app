import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip } from '@chakra-ui/react'

type Props = {
  onDelete: () => void
}
export const DeleteServiceButton = ({ onDelete }: Props) => {
  return (
    <Tooltip hasArrow label='Usuń usługę'>
      <IconButton onClick={onDelete} aria-label='Usuń usługę'>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  )
}
