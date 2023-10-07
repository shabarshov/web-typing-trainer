// export interface Option {
//   value: string
//   label: string
// }

export interface Selected {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  optionsObjects: string[]
  size: number
  round: number
  className: string
}
