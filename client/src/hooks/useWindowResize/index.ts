import { useEffect, useState } from "react"
import type { IUseWindowResize } from "./types"

const useWindowResize = (): IUseWindowResize => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", resizeHandler)

    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  }, [])

  return { windowWidth: width }
}

export default useWindowResize
