enum CaretType {
  "default",
  "insert",
  "underline",
}

interface ICaret {
  caretType: string
  blinking: boolean
}

export { CaretType }
export type { ICaret }
