import { Input } from '../Input'

import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        placeholder='Pesquisar pelo título'
      />

      <Profile>
        <div>
          <strong>Matheus Jacob</strong>
          <button>sair</button>
        </div>
        <img src="https://github.com/math-jacob.png" alt="foto do usuario" />
      </Profile>
    </Container>
  )
}