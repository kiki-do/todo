import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Post{
  id: number;
  text:string;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "todo",
        providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }: any) => ({ type: 'Todos' as const, id })), 'Todos']
          : ['Todos'],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: `todo`,
        method: 'POST',
        body
    }),
      invalidatesTags: [{type: 'Todos', id: 'LIST'}],
  }),
    
    updatePost: builder.mutation({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Todos'],
    }),

    completePost: builder.mutation({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
    }),

    isOpenPost: builder.mutation({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
    }),


    viewPost: builder.query({
      query: (id) => ({
        url: `todo/${id}`,
      })
    }),

    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `todo/${id}`,
        method: 'DELETE',
      }),

    })
    })
});

export const { useGetTodoQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation, useCompletePostMutation, useIsOpenPostMutation } = todoApi;