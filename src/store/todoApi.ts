import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Post{
  id: number;
  text:string;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "todo",
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: 'POST',
        body
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: 'DELETE',
      }),
    })

  })
})
export const { useGetTodoQuery, useAddPostMutation, useDeletePostMutation } = todoApi