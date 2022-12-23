import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

import classes from './copyTextPopover.module.scss'

type Props = { children: ReactNode; text: string; onCopy: () => void }

export const CopyTextPopover = ({ children, text, onCopy }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button className={classes.button}>
          <Tooltip hasArrow label='Pokaż całość'>
            {children}
          </Tooltip>
        </button>
      </PopoverTrigger>
      <PopoverContent shadow='2xl'>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Informacje o usłudze</PopoverHeader>
        <PopoverBody>
          <Tooltip hasArrow label='Skopiuj tekst'>
            <button className={classes.button} onClick={onCopy}>
              {text.split('|').map((text) => (
                <p>{text}</p>
              ))}
            </button>
          </Tooltip>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
