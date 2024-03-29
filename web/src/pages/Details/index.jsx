import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { MdDelete } from "react-icons/md";

import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

import { useAuth } from '../../contexts/auth'
import { getRating } from '../../utils/get-rating'
import { api } from '../../services/api'

import { Container, Stars, TagsWrapper } from './styles'

export function Details() {
  const { data } = useLocation().state

  const navigate = useNavigate()
  
  const { user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  async function handleDeleteMovie() {
    const confirm = window.confirm('Deseja realmente remover o filme?')

    if (confirm) {
      try {
        await api.delete(`/notes/${data.id}`)
        navigate('/')

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível excluir')
        }
      }
    }
  }

  return (
    <Container>
      <Header />

      <div className="buttons-container">
        <ButtonText Icon={FiArrowLeft} title='Voltar' onClick={() => navigate(-1)}/>

        <ButtonText 
          Icon={MdDelete} 
          title='Excluir Filme'
          onClick={handleDeleteMovie}
        />
      </div>

      <main>
        <div className="header">
          <h1>{data.title}</h1>
          <Stars>
            {getRating(data.rating)}
          </Stars>
        </div>
        
        <div className="movie-info">
          <img src={avatarUrl} alt="foto do usuário" />
          <span>Por {user.name}</span>

          <FiClock />
          <span>{format(parseISO(data.created_at), "dd/MM/yyyy ' às ' HH:mm", { locale: ptBR })}</span>
        </div>

        <TagsWrapper>
          {
            data.tags.map(tag => <Tag key={tag.id} details title={tag.name}/>)
          }
        </TagsWrapper>

        <section>
          {
            data.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
          }
        </section>
      </main>
    </Container>
  )
}