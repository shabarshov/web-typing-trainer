interface Section {
  num: number
  value: string
}

export interface SettingNavigationProps {
  settingSections: Section[]
  selectedSettingSection: Section
  setSelectedSettingSection: React.Dispatch<React.SetStateAction<Section>>
}
