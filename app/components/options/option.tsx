"use client";
import { BUTTONS_ACTIVE_TIME, GAME_TIME } from "@/app/constants";
import { addAnswer, setCurrentQuestion, setTimer } from "@/app/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { OptionProps } from "@/app/types/interface";
import React from "react";

const Option: React.FC<OptionProps> = ({ optionName, optionContent }) => {
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const timer = useAppSelector((state) => state.quiz.timer);

  const handleOptionClick = () => {
    dispatch(setCurrentQuestion(currentQuestion + 1));
    dispatch(setTimer(GAME_TIME));
    dispatch(addAnswer(optionName));
  };

  return (
    <button
      className="flex bg-amber-200 hover:bg-amber-300 cursor-pointer h-16 w-52 md:w-80 rounded-md items-center justify-center relative disabled:bg-slate-300 disabled:cursor-not-allowed"
      disabled={timer > BUTTONS_ACTIVE_TIME}
      onClick={() => handleOptionClick()}
    >
      <span className="absolute -left-4 bg-white border-2 border-amber-500 rounded-full w-7 h-7 text-center font-semibold">
        {optionName}
      </span>
      <p className=" w-full p-6 text-start">{optionContent}</p>
    </button>
  );
};

export default Option;
