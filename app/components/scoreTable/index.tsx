"use client";
import { correctAnswers } from "@/app/constants";
import { resetGame } from "@/app/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import React from "react";
import Table from "./table";

const ScoreTable = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.quiz.answers);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <Table />
      <div className="text-2xl text-center">
        Your Score: {answers.filter((item, index) => item === correctAnswers[index]).length} /{" "}
        {answers.length}
      </div>

      <button
        className="flex py-4 px-8 rounded-xl  border-2 border-amber-900 hover:border-amber-700 hover:text-slate-600"
        onClick={() => dispatch(resetGame())}
      >
        Try Again!
      </button>
    </div>
  );
};

export default ScoreTable;
