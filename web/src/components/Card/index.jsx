import { getRating } from '../../utils/get-rating'

import { Tag } from '../Tag'

import { Container, Stars, Tags } from './styles'

export function Card({ data, ...rest }) {

  return (
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Stars>
        {getRating(data.rating)}
      </Stars>

      <p>
        {data.description.length >= 420 
        ? `${data.description.slice(0, 420)}...` 
        : data.description}
      </p>
      
      <Tags>
        {
          data.tags.map(tag => 
            <Tag key={tag.id} title={tag.name}/>
          )
        }
      </Tags>
    </Container>
  )
}