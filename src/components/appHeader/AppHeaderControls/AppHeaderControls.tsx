import { EditIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import { useRef } from 'react'

import { SHORTCUT_KEYS } from '../../../constants/shortcutKeys'
import { HeaderNumberInput } from '../headerNumberInput'
import { VehicleMassToggle } from '../VehicleMassToggle/VehicleMassToggle'
import { useAppHeaderControls } from './useAppHeaderControls'

export const AppHeaderControls = () => {
  const { distanceAfterRepair, distanceAfterRepairInputHandler, distanceBeforeRepair, distanceInputHandler } =
    useAppHeaderControls()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const distanceInputs = [
    {
      inputHelperText: 'Odległość w jedną stronę (km)',
      inputTitle: 'Odległość',
      value: distanceBeforeRepair,
      onChange: distanceInputHandler,
      focusShortcut: SHORTCUT_KEYS.FOCUS.DISTANCE_TO_BREAKDOWN,
    },
    {
      inputHelperText: 'Odległość w jedną stronę (km)',
      inputTitle: 'Odległość odwiezienia',
      value: distanceAfterRepair,
      onChange: distanceAfterRepairInputHandler,
      focusShortcut: SHORTCUT_KEYS.FOCUS.DISTANCE_TOW_BACK,
    },
  ].map((input) => <HeaderNumberInput key={input.inputTitle} {...input} />)

  const Controls = (
    <>
      {distanceInputs} <VehicleMassToggle />
    </>
  )

  if (!isLargerThan800) {
    return (
      <>
        <IconButton
          colorScheme='blue'
          size='lg'
          rounded='full'
          onClick={onOpen}
          aria-label='Edytuj usługi'
          icon={<EditIcon fontSize='3xl' m='2' />}
        />
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent maxWidth='95%' alignSelf='center'>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Edytuj usługi
              </AlertDialogHeader>

              <AlertDialogBody>
                {' '}
                <VStack gap={8} h='100%' borderColor='gray.700' align='baseline'>
                  {Controls}
                </VStack>
              </AlertDialogBody>

              <AlertDialogFooter mt='8'>
                <Button ref={cancelRef} onClick={onClose}>
                  Zamknij
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  return (
    <HStack h='100%' rounded='2xl' p='4' shadow='lg' border='4px' borderColor='gray.700' align='baseline'>
      {Controls}
    </HStack>
  )
}
