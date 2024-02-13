import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  const name = 'Matheus Jacob'
  const email = 'matheus@gmail.com'

  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/math-jacob.png" alt="foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>
            <input id='avatar' type='file'/>
          </label>
        </Avatar>

        <Input Icon={FiUser} type='text' defaultValue={name}/>
        <Input Icon={FiMail} type='email' value={email}/>

        <Input Icon={FiLock} type='password' placeholder='Senha atual'/>
        <Input Icon={FiLock} type='password' placeholder='Senha antiga'/>

        <Button title='Salvar'/>
      </Form>
    </Container>
  )
}