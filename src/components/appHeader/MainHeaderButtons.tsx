import { DeleteIcon, SettingsIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

export const MainHeaderButtons = () => {
  const { resetServices } = useServicesStore((state) => state)

  const resetButtonHandler = () => resetServices()
  return (
    <HStack>
      <Tooltip hasArrow label='Resetuj wszystko'>
        <IconButton onClick={resetButtonHandler} aria-label='Resetuj wszystko'>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip hasArrow label='Otwórz ustawienia'>
        <IconButton aria-label='Otwórz ustawienia'>
          <SettingsIcon />
        </IconButton>
      </Tooltip>
    </HStack>
  )
}
