import { FC } from 'react'

const Button : FC<any> = ({ children }) => {
  return (
    <button type='button' className='bg-slate-700 hover:bg-slate-900 text-white border rounded-lg p-2 w-full'>
      {children}
    </button>
  )
}

export default Button