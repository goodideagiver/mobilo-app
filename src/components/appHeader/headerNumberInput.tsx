import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { ChangeEvent, Key, useRef } from 'react'
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
      <FormHelperText>{inputHelperText}</FormHelperText>
    </FormControl>
  )
}
