enum FontFamily {
  "Default",
  "Oxygen Mono",
  "Source Code Pro",
  "Ubuntu Mono",
  "Roboto Mono",
}

interface IFont {
  fontSize: string
  fontFamily: string
  symbolHeight: number
  symbolWidth: number
}

export { FontFamily }
export type { IFont }
