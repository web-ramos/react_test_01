import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, IPost } from '../constants/types'

type UsersResponse = IUser[]
type PostsResponse = IPost[]

const urlAPI = 'https://jsonplaceholder.typicode.com/'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlAPI }),
  endpoints: (builder) => ({
    getUser: builder.query<UsersResponse, void>({
      query: () => 'users',
    }),
    getPostsByUserId: builder.query<PostsResponse, string>({
      query: (id) => `users/${id}/posts`,
    }),
    getAlbumsByUserId: builder.query<PostsResponse, string>({
      query: (id) => `users/${id}/albums`,
    }),
  }),
})


export const {
  useGetAlbumsByUserIdQuery,
  useGetUserQuery,
  useGetPostsByUserIdQuery
} = userApi
