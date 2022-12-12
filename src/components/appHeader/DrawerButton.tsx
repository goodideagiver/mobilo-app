import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip } from '@chakra-ui/react'

type Props = {
  drawerOpenHandler: () => void
}

export const DrawerButton = ({ drawerOpenHandler }: Props) => (
  <Tooltip hasArrow label='Menu z usługami'>
    <IconButton aria-label='Pokaż usługi' onClick={drawerOpenHandler}>
      <HamburgerIcon />
    </IconButton>
  </Tooltip>
)
