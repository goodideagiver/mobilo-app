import { Kbd, VStack } from '@chakra-ui/react'
import { Key, ReactNode } from 'react'
import { useKeyCombo } from '../../hooks/useKeyCombo'

type Props = {
  children: ReactNode
  keyboardKey: Key
  condition?: boolean
  callback: () => void
}
export const ModifierKeyDisplay = ({ children, keyboardKey, condition = true, callback }: Props) => {
  const keyComboHandler = () => {
    if (condition) {
      callback()
    }
  }

  const { modifierPressed } = useKeyCombo(keyboardKey, keyComboHandler)

  return (
    <VStack>
      {children}
      {condition && modifierPressed && (
        <span>
          <Kbd>{keyboardKey.toString().toUpperCase()}</Kbd>
        </span>
      )}
    </VStack>
  )
}
