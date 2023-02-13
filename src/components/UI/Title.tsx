import { FC } from 'react'

const Title : FC<any> = ({ children }) => {
  return (
    <h1 className='mb-5 text-2xl text-center font-bold'>
      {children}
    </h1>
  )
}

export default Title