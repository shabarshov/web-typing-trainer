import { SliderProps } from "./SliderProps"
import cl from "./Slider.module.scss"
import { FC } from "react"
import Text from "../Text/Text"
export const Slider: FC<SliderProps> = ({
  value,
  setValue,
  style,
  description,
}) => {
  const changeMusicLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)
  console.log(description)
  return (
    <div>
      <p className={cl.descript}>{description}</p>
      <div className={cl.range} style={style}>
        <input
          type="range"
          min="0"
          step="2"
          max="100"
          value={value}
          onChange={changeMusicLevel}
        />
        <Text value={value} className={cl.val} />
      </div>
    </div>
  )
}
