
import { Container, GlobaalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Container>
          <GlobaalCss />
          <Rotas />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
