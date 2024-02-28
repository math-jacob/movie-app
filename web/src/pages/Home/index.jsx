import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

import { api } from '../../services/api'

import { Container, Content, TagsWrapper, SelectTagCard } from './styles'

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

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
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected.toString()}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search, tagsSelected])

  function handleTagSelected(selected) {
    if (selected === 'all') {
      setTagsSelected([])
      return
    }

    if (tagsSelected.includes(selected)) 
      setTagsSelected(tagsSelected.filter(tag => tag !== selected))
    else 
      setTagsSelected(prevState => [...prevState, selected])
  }

  return (
    <Container>
      <Header setSearch={setSearch}/>

      <main>
        <div>
          <h1>Meus Filmes</h1>
          <Button Icon={FiPlus} title='Adicionar filme' onClick={() => navigate('/new')}/>
        </div>

        <TagsWrapper>
          <SelectTagCard 
            type='button'
            onClick={() => handleTagSelected('all')}
            $isActive={tagsSelected.length === 0}
          >
            Todos
          </SelectTagCard>
          {
            tags?.map((tag, index) => (
              <SelectTagCard 
                key={index}
                type='button'
                onClick={() => handleTagSelected(tag.name)}
                $isActive={tagsSelected.includes(tag.name)}
              >
                { tag.name }
              </SelectTagCard>
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