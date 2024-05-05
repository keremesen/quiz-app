import { getQuizProps } from "@/app/types/interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts" }),
  endpoints: (builder) => ({
    getQuiz: builder.query<getQuizProps[], number>({
      query: (limit) => `?_limit=${limit}`,
      onQueryStarted(args, api) {
        api.queryFulfilled.then((data) => {});
      },
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;
