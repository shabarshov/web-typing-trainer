import { useEffect } from "react"
import type { RefObject } from "react"

const useOutsideClick = (
  callback: () => void,
  refs: Array<RefObject<HTMLElement>>,
) => {
  useEffect(() => {
    setTimeout(() => {
      const clickOutsideHandler = (event: Event) => {
        const e = event.target as Node

        if (
          refs.reduce((acc, cur) => {
            if (!cur.current) return false
            return acc && !cur.current.contains(e)
          }, true)
        ) {
          callback()
        }
      }

      window.addEventListener("click", clickOutsideHandler)

      return () => window.removeEventListener("click", clickOutsideHandler)
    })
  }, [])
}

export default useOutsideClick
