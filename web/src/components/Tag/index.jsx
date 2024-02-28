import { Container } from './styles'

export function Tag({ title, details = false }) {
  return (
    <Container $details={details}>
      {title}
    </Container>
  )
}