import Game from "./Game"
import { Container, styled } from '@mui/material'

const RootStyle = styled("div")({
  display:"flex",
  minHeight:"80%",
  overflow:"hidden"
})


function App() {

  return (
    <RootStyle>
    <Container>
      <Game/>
    </Container>
    </RootStyle>
  )
}

export default App
