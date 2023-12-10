import languageValues from "constants/dropdownValues"

const getCurrentLanguageValue = (
  initialValue: string,
  language: string,
): string => {
  if (language !== "ru" && language !== "en") {
    return ""
  }

  const value = languageValues.has(language)
    ? languageValues.get(language)
    : null

  if (value && value.has(initialValue)) {
    return value.get(initialValue) as string
  }

  return ""
}

export default getCurrentLanguageValue
