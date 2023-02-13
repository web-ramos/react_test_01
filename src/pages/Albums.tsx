import { FC } from 'react'
import RenderAlbum from '../components/RenderAlbum';
import RenderList from '../components/RenderList';
import { useGetListItems } from '../hooks/useGetListItems';
import { useGetAlbumsByUserIdQuery } from '../store/userApi';

type PropsAlbums = {
  userId: string
}

const Albums: FC<PropsAlbums> = ({ userId }) => {

  const { dataState, error, isLoading } = useGetListItems(useGetAlbumsByUserIdQuery, userId)

  if (error) {
    return <div>Something went wrong !!!</div>
  }

  return (
    <RenderList title='Albums' items={dataState} isLoading={isLoading} RenderProp={RenderAlbum} />
  );
}

export default Albums
