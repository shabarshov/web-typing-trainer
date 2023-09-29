interface ICaretPosition {
  left: string
  top: string
}

const updateCaretPosition = (
  currentX: string,
  currentY: string,
  stepX: number,
  stepY: number,
): ICaretPosition => {
  const newX = `${parseInt(currentX.slice(0, -2)) + stepX}px`
  const newY = `${parseInt(currentY.slice(0, -2)) + stepY}px`

  return { left: newX, top: newY }
}

export default updateCaretPosition
