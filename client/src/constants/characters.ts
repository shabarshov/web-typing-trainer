const RU_CHARACTERS =
  "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("")

const ENG_CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")

const SPECIAL_CHARACTERS = [
  "Backspace",
  ..." !@#$%^&*()-_=+~`|/,.<>[]{}№;:?".split(""),
  '"',
  "'",
  "\u005C", // this is "\"
]

const NUMBERS = "0123456789".split("")

const CHARACTERS = [
  ...RU_CHARACTERS,
  ...ENG_CHARACTERS,
  ...SPECIAL_CHARACTERS,
  ...NUMBERS,
]

export { CHARACTERS }
