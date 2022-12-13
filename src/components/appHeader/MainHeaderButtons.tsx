import { DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { useServicesStore } from '../../store/servicesStore/servicesStore'

type Props = {
  summaryOpenHandler: () => void
}

export const MainHeaderButtons = ({ summaryOpenHandler }: Props) => {
  const { resetServices } = useServicesStore((state) => state)

  const resetButtonHandler = () => resetServices()
  return (
    <HStack>
      <Tooltip hasArrow label='Resetuj wszystko'>
        <IconButton onClick={resetButtonHandler} aria-label='Resetuj wszystko'>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip hasArrow label='Podsumowanie usług'>
        <IconButton onClick={summaryOpenHandler} aria-label='Podsumowanie usług'>
          <ViewIcon />
        </IconButton>
      </Tooltip>
    </HStack>
  )
}
