import { Kbd, VStack } from '@chakra-ui/react'
import { Key, ReactNode } from 'react'

import { useKeyCombo } from '../../hooks/useKeyCombo'
import styles from './ModifierKeyDisplay.module.css'

type Props = {
  children: ReactNode
  keyboardKey: Key
  condition?: boolean
  callback: () => void
  direction?: 'left'
}
export const ModifierKeyDisplay = ({ children, keyboardKey, condition = true, callback, direction }: Props) => {
  const keyComboHandler = () => {
    if (condition) {
      callback()
    }
  }

  const { modifierPressed } = useKeyCombo(keyboardKey, keyComboHandler)

  return (
    <VStack className={styles.wrapper}>
      {children}
      {condition && modifierPressed && (
        <span className={`${styles.keyWrapper} ${direction === 'left' ? styles.left : ''}`}>
          <Kbd>{keyboardKey.toString().toUpperCase()}</Kbd>
        </span>
      )}
    </VStack>
  )
}
