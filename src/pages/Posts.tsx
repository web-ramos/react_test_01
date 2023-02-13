import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RenderList from '../components/RenderList'
import RenderPost from '../components/RenderPost'
import { IPost } from '../constants/types'

import { useGetListItems } from '../hooks/useGetListItems'
import { useGetPostsByUserIdQuery } from '../store/userApi'

type PostHook = {
  dataState: IPost[],
  error: boolean,
  isLoading: boolean
}

const Posts: FC= () => {

  const navigate = useNavigate();
  let { userId } = useParams() as { userId: string }

  if (!userId) {
    navigate(-1)
  }

  const { dataState, error, isLoading } : PostHook = useGetListItems(useGetPostsByUserIdQuery, userId)

  if (error) {
    return <div>Something went wrong !!!</div>
  }

  return (
    <RenderList title='Posts' items={dataState} isLoading={isLoading} RenderProp={RenderPost} />
  );
}

export default Posts