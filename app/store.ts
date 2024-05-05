import { configureStore } from "@reduxjs/toolkit";
import quiz from "./features/quiz/quizSlice";
import { quizApi } from "./features/quiz/quizApiSlice";

export const store = configureStore({
  reducer: {
    quiz,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(quizApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
