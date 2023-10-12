
import { CSSProperties } from 'react';

export interface DropdownProps {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  optionsObjects: string[]
  className: string
  description: string
  style?: CSSProperties
 
}
