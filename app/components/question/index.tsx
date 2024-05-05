"use client";
import { TOTAL_QUESTIONS } from "@/app/constants";
import { useGetQuizQuery } from "@/app/features/quiz/quizApiSlice";
import { useAppSelector } from "@/app/hooks";
import React from "react";

const Question = () => {
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const { data } = useGetQuizQuery(TOTAL_QUESTIONS);

  return (
    <div className="flex bg-amber-200 rounded-md w-3/5 h-auto p-6 items-center justify-center relative">
      <span className="absolute -top-2 -left-3 bg-white border-2 border-amber-500 w-7 h-7 rounded-full text-center font-semibold">
        {currentQuestion}
      </span>
      {data && currentQuestion <= TOTAL_QUESTIONS && data[currentQuestion - 1].body}
    </div>
  );
};

export default Question;
