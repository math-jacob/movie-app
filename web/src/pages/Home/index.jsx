import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

import { api } from '../../services/api'

import { Container, Content, TagsWrapper } from './styles'

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [filteredTags, setFilteredTags] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fecthTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fecthTags()
  }, [])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [])

  return (
    <Container>
      <Header setSearch={setSearch}/>

      <main>
        <div>
          <h1>Meus Filmes</h1>
          <Button Icon={FiPlus} title='Adicionar filme' onClick={() => navigate('/new')}/>
        </div>

        <TagsWrapper>
          {
            tags?.map((tag, index) => (
              <button 
                key={index}
              >
                { tag.name }
              </button>
            ))
          }
        </TagsWrapper>

        <Content>
          { movies?.map((movie) => <Card key={movie.id} data={movie}/>) }
        </Content>
      </main>
    </Container>
  )
}