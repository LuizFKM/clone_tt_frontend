import { Provider } from 'react-redux'
import { Container, GlobaalCss } from './styles'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <GlobaalCss />
          <Rotas />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
