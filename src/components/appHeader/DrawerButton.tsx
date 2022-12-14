import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { ModifierKeyDisplay } from '../ui/ModifierKeyDisplay'

type Props = {
  drawerOpenHandler: () => void
}

export const DrawerButton = ({ drawerOpenHandler }: Props) => {
  return (
    <ModifierKeyDisplay keyboardKey={'D'} callback={drawerOpenHandler}>
      <Tooltip hasArrow label='Menu z usługami'>
        <IconButton aria-label='Pokaż usługi' onClick={drawerOpenHandler}>
          <HamburgerIcon />
        </IconButton>
      </Tooltip>
    </ModifierKeyDisplay>
  )
}
