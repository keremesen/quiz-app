"use client";
import React from "react";
import { useAppSelector } from "@/app/hooks";
import { correctAnswers } from "@/app/constants";

const Table = () => {
  const answers = useAppSelector((state) => state.quiz.answers);

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b-2 border-purple-700">
              Question
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b-2 border-purple-700">
              Your Answer
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase border-b-2 border-purple-700">
              Correct Answer
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {answers.map((item, index) => {
            const isCorrect = item === correctAnswers[index];
            const rowClass = isCorrect ? "bg-green-100" : "bg-red-100";

            return (
              <tr key={index} className={rowClass}>
                <td className="px-6 py-4 whitespace-nowrap text-sm border-b border-gray-200">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm border-b border-gray-200">{item}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm border-b border-gray-200">
                  {correctAnswers[index]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
