"use client";
import { GAME_OVER_TIME, GAME_TIME } from "@/app/constants";
import { addAnswer, setCurrentQuestion, setTimer } from "@/app/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import React, { useEffect } from "react";

const Timer = () => {
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state) => state.quiz.timer);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTimer(timer - 1));
    }, 1000);

    if (timer === GAME_OVER_TIME) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      dispatch(setTimer(GAME_TIME));
      dispatch(addAnswer("-"));
    }

    return () => clearInterval(interval);
  }, [dispatch, timer, currentQuestion]);

  return <div className="flex items-center justify-center text-5xl font-bold">{timer}</div>;
};

export default Timer;
