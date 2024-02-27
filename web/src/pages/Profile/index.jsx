import { useState } from 'react'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { api } from '../../services/api'
import { useAuth } from '../../contexts/auth'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate(event) {
    event.preventDefault()

    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <ButtonText 
          Icon={FiArrowLeft} 
          title='Voltar'
          onClick={() => navigate(-1)}
        />
      </header>

      <Form onSubmit={(event) => handleUpdate(event)}>
        <Avatar>
          <img src={avatar} alt="foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>
            <input id='avatar' type='file' onChange={ (event) => handleChangeAvatar(event)}/>
          </label>
        </Avatar>

        <Input 
          Icon={FiUser} 
          type='text' 
          defaultValue={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          Icon={FiMail} 
          type='email' 
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          Icon={FiLock}   
          type='password'   
          placeholder='Nova senha'
          onChange={e => setNewPassword(e.target.value)}
        /> 
        <Input 
          Icon={FiLock}
          type='password'
          placeholder='Senha antiga'
          onChange={e => setOldPassword(e.target.value)}
        />

        <Button title='Salvar' type='submit'/>
      </Form>
    </Container>
  )
}