import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Input } from '../../components/Input'

import { Container, Form, Background } from './styles'
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          Icon={FiUser}
          placeholder='Nome'
        />

        <Input 
          Icon={FiMail}
          placeholder='E-mail'
        />

        <Input 
          Icon={FiLock}
          placeholder='Senha'
        />

        <Button title='Cadastrar' type='button'/>

        <a href="#">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>

      <Background />
    </Container>
  )
}
