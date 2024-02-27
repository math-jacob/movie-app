import { useNavigate } from 'react-router-dom'

import { Input } from '../Input'

import { useAuth } from '../../contexts/auth'

import { Container, Profile } from './styles'

export function Header() {
  const navigate = useNavigate()

  const { signOut } = useAuth()

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        placeholder='Pesquisar pelo título'
      />

      <Profile>
        <div>
          <strong>Matheus Jacob</strong>
          <button onClick={signOut}>sair</button>
        </div>
        
        <img 
          src="https://github.com/math-jacob.png"
          alt="foto do usuario"
          onClick={() => navigate('/profile')}
        />
      </Profile>
    </Container>
  )
}