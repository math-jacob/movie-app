import { FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
          Icon={FiMail}
          placeholder='E-mail'
        />

        <Input 
          Icon={FiLock}
          placeholder='Senha'
        />

        <Button title='Entrar' type='button'/>

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}
