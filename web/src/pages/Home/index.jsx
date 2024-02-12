import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <h1>Meus Filmes</h1>
          <Button title='Adicionar filme'/>
        </div>
      </main>
    </Container>
  )
}