import { FC } from "react";
import { IPost } from "../constants/types";

type RenderPostProps = {
  item: IPost
}

const RenderPost: FC<RenderPostProps> = ({ item }) => {
  return (
    <article className='p-3 border border-slate-300 bg-slate-200'>
      <h2 className='mb-3 text-sm font-bold'>{item.title}</h2>
      <div className=' text-sm '>{item.body}</div>
    </article>
  )
}

export default RenderPost