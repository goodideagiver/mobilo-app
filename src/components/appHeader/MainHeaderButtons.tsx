import { DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { useHasServices } from '../../hooks/useHasServices'
import { useServicesStore } from '../../store/servicesStore/servicesStore'
import { ModifierKeyDisplay } from '../ui/ModifierKeyDisplay'

type Props = {
  summaryOpenHandler: () => void
}

export const MainHeaderButtons = ({ summaryOpenHandler }: Props) => {
  const { resetServices } = useServicesStore((state) => state)

  const { hasServices, hasServicesWithValue } = useHasServices()

  return (
    <HStack>
      <ModifierKeyDisplay condition={hasServices} keyboardKey={'R'} callback={resetServices}>
        <Tooltip hasArrow label='Resetuj wszystko'>
          <IconButton disabled={!hasServices} onClick={resetServices} aria-label='Resetuj wszystko'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ModifierKeyDisplay>
      <ModifierKeyDisplay condition={hasServicesWithValue} keyboardKey={'V'} callback={summaryOpenHandler}>
        <Tooltip hasArrow label='Podsumowanie usług'>
          <IconButton disabled={!hasServicesWithValue} onClick={summaryOpenHandler} aria-label='Podsumowanie usług'>
            <ViewIcon />
          </IconButton>
        </Tooltip>
      </ModifierKeyDisplay>
    </HStack>
  )
}
