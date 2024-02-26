import { FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from "../../components/Button";

import { useNavigate } from 'react-router-dom'

import { Container, Form, Background } from './styles'

export function SignIn() {
  const navigate = useNavigate()

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
        />

        <Input
          Icon={FiLock}
          type="password"
          placeholder='Senha'
        />

        <Button title='Entrar' type='button'/>

        <ButtonText title='Criar conta' onClick={() => navigate('/signup')}/>
      </Form>

      <Background />
    </Container>
  )
}
