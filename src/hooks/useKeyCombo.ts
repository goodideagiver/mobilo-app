import { Key, useCallback, useEffect, useState } from 'react'

export const useKeyCombo = (key: Key, callback: () => void) => {
  const [modifierPressed, setModifierPressed] = useState(false)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.shiftKey) {
        setModifierPressed(true)
      }

      if (event.key === key && modifierPressed) {
        callback()
      }
    },
    [modifierPressed, key],
  )

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (!event.shiftKey) {
        setModifierPressed(false)
      }
    },
    [modifierPressed, key],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return {
    modifierPressed,
  }
}
