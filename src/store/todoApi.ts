import { HEROKU_URL } from "./const";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
	id: number;
	text: string;
}
export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({ baseUrl: HEROKU_URL }),
	tagTypes: ["Todos"],
	endpoints: builder => ({
		getTodo: builder.query({
			query: (page = 1) => `todo?page=${page}&perPage=25`,

			providesTags: result =>
				result
					? [
							...result.map(({ id }: any) => ({ type: "Todos", id })),
							{ type: "Todos", id: "LIST" },
					  ]
					: [{ type: "Todos", id: "LIST" }],
		}),

		addPost: builder.mutation({
			query: body => ({
				url: `todo`,
				method: "POST",
				body,
			}),
			invalidatesTags: [{ type: "Todos", id: "LIST" }],
		}),

		updatePost: builder.mutation({
			query: body => ({
				url: `todo/${body.id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: [{ type: "Todos", id: "LIST" }],
		}),

		completePost: builder.mutation({
			query: body => ({
				url: `todo/${body.id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: [{ type: "Todos", id: "LIST" }],
		}),

		isOpenPost: builder.mutation({
			query: body => ({
				url: `todo/${body.id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: [{ type: "Todos", id: "LIST" }],
		}),

		viewPost: builder.query({
			query: id => ({
				url: `todo/${id}`,
			}),
		}),

		deletePost: builder.mutation<{ success: boolean; id: number }, number>({
			query: id => ({
				url: `todo/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: [{ type: "Todos", id: "LIST" }],
		}),
	}),
});

export const {
	useGetTodoQuery,
	useAddPostMutation,
	useDeletePostMutation,
	useUpdatePostMutation,
	useCompletePostMutation,
	useIsOpenPostMutation,
} = todoApi;
