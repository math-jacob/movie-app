import { useState } from "react";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from "../../components/Button";

import { useNavigate } from 'react-router-dom'

import { Container, Form, Background } from './styles'

export function SignUp() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    api.post('/users', { name, email, password })
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar')
      }
    })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          Icon={FiUser}
          placeholder='Nome'
          onChange={e => setName(e.target.value)}
        />

        <Input 
          Icon={FiMail}
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          Icon={FiLock}
          placeholder='Senha'
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Cadastrar' type='button' onClick={handleSignUp}/>

        <ButtonText Icon={FiArrowLeft} type='button' title='Voltar para o login' onClick={() => navigate(-1)}/>
      </Form>

      <Background />
    </Container>
  )
}
