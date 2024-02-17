import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { InputTag } from '../../components/InputTag'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText Icon={FiArrowLeft} title='Voltar'/>

        <h1>Novo filme</h1>

        <div className='col-2'>
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota (de 0 a 5)'/>
        </div>

        <Textarea placeholder='Observações'/>

        <h2>Marcadores</h2>
        <div className="tags-wrapper">
          <InputTag value='React'/>
          <InputTag isNew placeholder='Novo marcador'/>
        </div>

        <div className='col-2'>
          <Button title='Excluir filme'/>
          <Button title='Salvar alterações'/>
        </div>
      </main>
    </Container>
  )
}