import React, { useState } from "react"
import type { FC } from "react"

import Caret from "components/Caret/Caret"
import TextContainer from "components/containers/TextContainer/TextContainer"
import TextField from "components/TextField/TextField"

const HomePage: FC = () => {
  const [caretPosition, setCaretPosition] = useState({
    left: "-1px",
    top: "0px",
  })

  return (
    <TextContainer>
      <Caret left={caretPosition.left} top={caretPosition.top} />
      <TextField setCaretPosition={setCaretPosition} />
    </TextContainer>
  )
}

export default HomePage
