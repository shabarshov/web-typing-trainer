enum FontFamily {
  monospace,
  "serif mono",
}

interface IFont {
  fontSize: string
  fontFamily: string
}

export { FontFamily }
export type { IFont }
