import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Post{
  id: number;
  text:string;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "todo",
      providesTags: (result) => result 
        ? [
          ...result.map(({id}: Post) => ({ type: 'Posts', id: 'LIST'})),
        ]
        : [{ type: 'Posts', id: 'LIST'}]
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: 'POST',
        body
      })
    })

  })
})
export const { useGetTodoQuery, useAddPostMutation } = todoApi