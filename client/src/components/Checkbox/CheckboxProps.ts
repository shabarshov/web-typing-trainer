import { CSSProperties } from 'react';


export interface CheckboxProps {
  text: string
  value: boolean
  setValue: React.Dispatch<React.SetStateAction<boolean>>
  className:string
  style?: CSSProperties
}
