import { FiStar } from 'react-icons/fi'

import { Tag } from '../Tag'

import { Container, Stars, Tags } from './styles'

export function Card({ data, ...rest }) {

  function getRating() {
    switch (data.rating) {
      case 1:
        return (
          <>
            <FiStar className='filled'/>
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </>
        )
      case 2:
        return (
          <>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar />
            <FiStar />
            <FiStar />
          </>
        )
      case 3:
        return (
          <>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar />
            <FiStar />
          </>
        )
      case 4:
        return (
          <>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar/>
          </>
        )
      default:
        return (
          <>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
            <FiStar className='filled'/>
          </>
        )
    }
  }

  return (
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Stars>
        {getRating()}
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