import { useState } from "react"
import type { IUseTimer } from "./types"

const useTimer = (): IUseTimer => {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [timerValue, setTimerValue] = useState<number | null>(null)

  const startTimer = (): void => {
    setStartTime(Date.now())
  }

  const restartTimer = (): void => {
    setStartTime(null)
    setTimerValue(null)
  }

  const endTimer = (): void => {
    if (startTime) setTimerValue(Date.now() - startTime)
  }

  return { startTime, startTimer, endTimer, timerValue, restartTimer }
}

export default useTimer
