"use client";
import { useAppSelector } from "@/app/hooks";
import React from "react";
import ScoreTable from "../scoreTable";
import Timer from "../timer";
import Question from "../question";
import Options from "../options";
import { TOTAL_QUESTIONS } from "@/app/constants";
import { useGetQuizQuery } from "@/app/features/quiz/quizApiSlice";

const Game = () => {
  const { data, isFetching, isLoading } = useGetQuizQuery(TOTAL_QUESTIONS);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  if (!data && isFetching && isLoading) return <div>Loading...</div>;

  return (
    <>
      {currentQuestion > TOTAL_QUESTIONS ? (
        <ScoreTable />
      ) : (
        <>
          <Timer />
          <Question />
          <Options />
        </>
      )}
    </>
  );
};

export default Game;
