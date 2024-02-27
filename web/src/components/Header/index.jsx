import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import { api } from '../../services/api'
import { useAuth } from '../../contexts/auth'

import { Container, Profile } from './styles'

export function Header() {
  const navigate = useNavigate()

  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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
          src={avatarUrl}
          alt="foto do usuario"
          onClick={() => navigate('/profile')}
        />
      </Profile>
    </Container>
  )
}