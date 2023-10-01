interface ICaretPosition {
  left: string
  top: string
}

const getCaretPosition = (x: number, y: number): ICaretPosition => {
  return { left: `${x}px`, top: `${y}px` }
}

export default getCaretPosition
