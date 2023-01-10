import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { ChangeEvent, Key, useRef } from 'react'

import { useExtendedInfoStore } from '../../store/uiStore/extendedInfoStore'
import { ModifierKeyDisplay } from '../ui/ModifierKeyDisplay'

type Props = {
  inputTitle: string
  inputHelperText: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  focusShortcut: Key
}
export const HeaderNumberInput = ({ inputHelperText, inputTitle, value, onChange, focusShortcut }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const extendedInfo = useExtendedInfoStore((state) => state.extendedInfo)

  return (
    <FormControl h='100%' display='flex' flexDir='column' justifyContent='space-between'>
      <FormLabel>{inputTitle}</FormLabel>
      <ModifierKeyDisplay
        callback={() => {
          inputRef.current?.focus()
        }}
        keyboardKey={focusShortcut}
      >
        <Input ref={inputRef} type='number' min='0' value={value} onChange={onChange} />
      </ModifierKeyDisplay>
      {extendedInfo && <FormHelperText>{inputHelperText}</FormHelperText>}
    </FormControl>
  )
}
