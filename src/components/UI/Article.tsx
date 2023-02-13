import { FC } from 'react'

const Article : FC<any> = ({ children }) => {
  return (
    <article className='p-2 border bg-slate-200'>
      { children }
    </article>
  )
}

export default Article