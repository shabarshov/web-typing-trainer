import React, { useState } from "react"
import type { FC } from "react"

import Caret from "components/Caret/Caret"
import TextContainer from "components/containers/TextContainer/TextContainer"
import TextField from "components/TextField/TextField"

import { shortWords as initialText } from "text"

import { textWrapper } from "utils"

const text = textWrapper(initialText, {
  left: 0,
  top: 0,
})

const HomePage: FC = () => {
  const [caretPosition, setCaretPosition] = useState({
    left: "0px",
    top: "0px",
  })

  return (
    <TextContainer>
      <Caret left={caretPosition.left} top={caretPosition.top} />
      <TextField text={text} setCaretPosition={setCaretPosition} />
    </TextContainer>
  )
}

export default HomePage
