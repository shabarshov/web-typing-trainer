interface IUseTimer {
  readonly startTime: number | null
  readonly startTimer: () => void
  readonly endTimer: () => void
  readonly timerValue: number | null
  readonly restartTimer: () => void
}

export type { IUseTimer }
