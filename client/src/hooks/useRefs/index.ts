import { useRef } from "react"
import type { RefObject } from "react"

const useRefs = <T extends HTMLElement>(
  count: number,
): { refs: Array<RefObject<T>> } => {
  const refs = Array<RefObject<T> | null>(count)
    .fill(null)
    .map(() => useRef<T>(null))

  return { refs }
}

export default useRefs
