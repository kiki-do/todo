import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Post{
  id: number;
  text:string;
}

type PostResponce = Post[];

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodo: builder.query<Post[], void>({
      query: () => "todo",
        providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Todos' as const, id })), 'Todos']
          : ['Todos'],
    }),

    addPost: builder.mutation<Post, Omit<Post, 'id'>>({
      query: (body) => ({
        url: `todo`,
        method: 'POST',
        body
    }),
      invalidatesTags:  [{type:'Todos', id: 'LIST'}],
  }),
    
    updatePost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags:  [{type:'Todos', id: 'LIST'}],
    }),

    completePost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags:  [{type:'Todos', id: 'LIST'}],
    }),

    isOpenPost: builder.mutation({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags:  [{type:'Todos', id: 'LIST'}],
    }),


    viewPost: builder.query({
      query: (id) => ({
        url: `todo${id}`,
      })
    }),

    deletePost: builder.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({
      query: (id) => ({
        url: `todo${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:  [{type:'Todos', id: 'LIST'}],
    })
    })
});

export const { useGetTodoQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation, useCompletePostMutation, useIsOpenPostMutation } = todoApi;