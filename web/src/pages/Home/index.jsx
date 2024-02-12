import { FiPlus } from 'react-icons/fi'
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
          <Button Icon={FiPlus} title='Adicionar filme'/>
        </div>
      </main>
    </Container>
  )
}