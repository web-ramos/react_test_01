import { FC } from 'react'
import RenderList from '../components/RenderList';
import RenderUser from '../components/RenderUser';
import { IUser } from '../constants/types';
import { useGetListItems } from '../hooks/useGetListItems';
import { useGetUserQuery } from '../store/userApi';

type UserHook = {
  dataState: IUser[],
  error: boolean,
  isLoading: boolean
}


const Users: FC = () => {

  const { dataState, error, isLoading } : UserHook = useGetListItems(useGetUserQuery)

  if (error) {
    return <div>Something went wrong !!!</div>
  }

  return (
    <RenderList title='Posts' items={dataState} isLoading={isLoading} RenderProp={RenderUser} />
  );
}

export default Users