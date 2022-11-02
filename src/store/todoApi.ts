import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "todo"
    })
  })
})
export const { useGetTodoQuery } = todoApi