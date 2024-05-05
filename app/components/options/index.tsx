import React, { useEffect, useState } from "react";
import Option from "./option";
import { useGetQuizQuery } from "@/app/features/quiz/quizApiSlice";
import { TOTAL_QUESTIONS } from "@/app/constants";
import { useAppSelector } from "@/app/hooks";

const Options = () => {
  const { data } = useGetQuizQuery(TOTAL_QUESTIONS);
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const [option, setOption] = useState([]);

  useEffect(() => {
    if (data) {
      setOption(data[currentQuestion - 1]?.body.split(" ").slice(0, 4));
    }
  }, [data, currentQuestion]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Option optionContent={option[0]} optionName="A" />
      <Option optionContent={option[1]} optionName="B" />
      <Option optionContent={option[2]} optionName="C" />
      <Option optionContent={option[3]} optionName="D" />
    </div>
  );
};

export default Options;
