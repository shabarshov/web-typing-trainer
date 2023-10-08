import { CSSProperties } from 'react';

export interface SliderProps {
    value:string,
    setValue: React.Dispatch<React.SetStateAction<string>>
    style?: CSSProperties
}