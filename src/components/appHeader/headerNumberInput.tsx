import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

type Props = {
  inputTitle: string
  inputHelperText: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const HeaderNumberInput = ({ inputHelperText, inputTitle, value, onChange }: Props) => {
  return (
    <FormControl h="100%" display="flex" flexDir="column" justifyContent="space-between">
      <FormLabel>{inputTitle}</FormLabel>
      <Input type="number" min="0" value={value} onChange={onChange} />
      <FormHelperText>{inputHelperText}</FormHelperText>
    </FormControl>
  )
}
