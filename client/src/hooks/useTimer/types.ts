interface IUseTimer {
  readonly startTime: number | null
  readonly startTimer: () => void
  readonly endTimer: () => void
  readonly timerValue: number | null
}

export type { IUseTimer }
