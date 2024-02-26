import { useState } from 'react'
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from "../../components/Button";

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../contexts/auth'

import { Container, Form, Background } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          Icon={FiMail}
          type="email"
          placeholder='E-mail'
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          Icon={FiLock}
          type="password"
          placeholder='Senha'
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Entrar' type='button' onClick={handleSignIn}/>

        <ButtonText title='Criar conta' onClick={() => navigate('/signup')}/>
      </Form>

      <Background />
    </Container>
  )
}
