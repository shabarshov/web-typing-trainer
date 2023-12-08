const ruValues = new Map<string, string>([
  ["ru", "Русский"],
  ["eng", "English"],
  ["white", "Светлая"],
  ["black", "Тёмная"],
  ["Default", "Default"],
  ["Oxygen Mono", "Oxygen Mono"],
  ["Source Code Pro", "Source Code Pro"],
  ["Ubuntu Mono", "Ubuntu Mono"],
  ["Roboto Mono", "Roboto Mono"],
  ["underline", "Подчёркивание"],
  ["default", "Стандарт"],
  ["insert", "Выделение"],
])

const engValues = new Map<string, string>([
  ["ru", "Русский"],
  ["eng", "English"],
  ["white", "White"],
  ["black", "Black"],
  ["Default", "Default"],
  ["Oxygen Mono", "Oxygen Mono"],
  ["Source Code Pro", "Source Code Pro"],
  ["Ubuntu Mono", "Ubuntu Mono"],
  ["Roboto Mono", "Roboto Mono"],
  ["underline", "Underline"],
  ["default", "Default"],
  ["insert", "Insert"],
])

const languageValues = new Map<string, Map<string, string>>()

languageValues.set("ru", ruValues)
languageValues.set("eng", engValues)

export default languageValues
