const msToTime = (ms: number): { min: string; sec: string; ms: string } => {
  const msResult = ms % 100
  const secResult = Math.floor((ms / 1000) % 60)
  const minResult = Math.floor((ms / 60000) % 100)

  return {
    ms: msResult < 10 ? `0${msResult}` : `${msResult}`,
    sec: secResult < 10 ? `0${secResult}` : `${secResult}`,
    min: minResult < 10 ? `0${minResult}` : `${minResult}`,
  }
}

export default msToTime
