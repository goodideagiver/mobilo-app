import { Key, ReactNode } from 'react'

import { ModifierKeyDisplay } from '../../../ui/ModifierKeyDisplay'

type Props = {
  shortcutKey?: Key
  children?: ReactNode
  serviceDeleteHandler: () => void
}

export const DeleteServiceShortcut = ({ children, shortcutKey, serviceDeleteHandler }: Props) => {
  if (!shortcutKey) return <>{children}</>

  return (
    <ModifierKeyDisplay direction='left' callback={serviceDeleteHandler} keyboardKey={shortcutKey}>
      {children}
    </ModifierKeyDisplay>
  )
}
