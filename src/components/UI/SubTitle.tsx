import { FC } from 'react'

const SubTitle : FC<any> = ({ children }) => {
  return (
    <h2 className='text-sm font-bold'>
      {children}
    </h2>
  )
}

export default SubTitle