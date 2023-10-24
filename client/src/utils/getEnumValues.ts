const getEnumValues = (Enum: object): string[] => {
  return Object.values(Enum).filter((v) => typeof v === "string")
}

export default getEnumValues
