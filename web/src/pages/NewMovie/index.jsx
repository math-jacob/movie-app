import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { InputTag } from '../../components/InputTag'
import { Button } from '../../components/Button'

import { api } from '../../services/api'

import { Container, Form } from './styles'

export function NewMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie(event) {
    event.preventDefault()

    if (newTag) {
      return alert('Você deixou uma tag no campo para adicionar, mas não confirmou. Clique para adicionar ou deixe o campo vazio.')
    }

    try {
      await api.post('/notes', {
        title,
        rating,
        description,
        tags
      })

      alert('Nota criada com sucesso!')
      navigate('/')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível criar a nota')
      }
    }
  }

  return (
    <Container>
      <Header />

      <ButtonText Icon={FiArrowLeft} title='Voltar' onClick={() => navigate(-1)}/>
      
      <Form onSubmit={(event) => handleNewMovie(event)}>
        <h1>Novo filme</h1>

        <div className='col-2'>
          <Input 
            placeholder='Título'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input 
            placeholder='Sua nota (de 0 a 5)'
            type='number'
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <Textarea 
          placeholder='Observações'
          onChange={(e) => setDescription(e.target.value)}
        />

        <h2>Marcadores</h2>
        <div className="tags-wrapper">
          {tags.map((tag, index) => (
            <InputTag 
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
            />
          ))}
          <InputTag 
            isNew
            value={newTag}
            placeholder='Novo marcador'
            onClick={handleAddTag}
            onChange={e => setNewTag(e.target.value)}
          />
        </div>

        <div className='col-2'>
          <Button title='Excluir filme' type='button'/>
          <Button title='Salvar alterações' type='submit'/>
        </div>
      </Form>

    </Container>
  )
}