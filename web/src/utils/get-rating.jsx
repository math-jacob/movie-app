import { FiStar } from 'react-icons/fi'

export function getRating(rating) {
  switch (rating) {
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