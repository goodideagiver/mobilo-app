import { DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, HStack, IconButton, Switch, Tooltip, VStack } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

import { SHORTCUT_KEYS } from '../../constants/shortcutKeys'
import { useHasServices } from '../../hooks/useHasServices'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { useExtendedInfoStore } from '../../store/uiStore/extendedInfoStore'
import { ModifierKeyDisplay } from '../ui/ModifierKeyDisplay'

type Props = {
  summaryOpenHandler: () => void
}

export const MainHeaderButtons = ({ summaryOpenHandler }: Props) => {
  const { resetServices } = useServicesStore((state) => state)

  const { hasServices, hasServicesWithValue } = useHasServices()

  const { extendedInfo, hide, show } = useExtendedInfoStore((state) => state)

  const extendedInfoSwitchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      show()
    } else {
      hide()
    }
  }

  return (
    <VStack>
      <HStack>
        <ModifierKeyDisplay condition={hasServices} keyboardKey={SHORTCUT_KEYS.RESET} callback={resetServices}>
          <Tooltip hasArrow label='Resetuj wszystko'>
            <IconButton disabled={!hasServices} onClick={resetServices} aria-label='Resetuj wszystko'>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </ModifierKeyDisplay>
        <ModifierKeyDisplay
          condition={hasServicesWithValue}
          keyboardKey={SHORTCUT_KEYS.VIEW_SERVICES}
          callback={summaryOpenHandler}
        >
          <Tooltip hasArrow label='Podsumowanie usług'>
            <IconButton disabled={!hasServicesWithValue} onClick={summaryOpenHandler} aria-label='Podsumowanie usług'>
              <ViewIcon />
            </IconButton>
          </Tooltip>
        </ModifierKeyDisplay>
      </HStack>
      <Tooltip hasArrow label={`Wyświetl ${extendedInfo ? 'mniej' : 'więcej'} informacji`} placement='left'>
        <FormControl display='flex' alignItems='center'>
          <VStack>
            <FormLabel htmlFor='extended-info' mb='0'>
              Informacje
            </FormLabel>
            <Switch isChecked={extendedInfo} onChange={extendedInfoSwitchHandler} id='extended-info' />
          </VStack>
        </FormControl>
      </Tooltip>
    </VStack>
  )
}
