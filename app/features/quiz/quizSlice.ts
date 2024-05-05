import { GAME_TIME } from "@/app/constants";
import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  timer: number;
  currentQuestion: number;
  answers: string[];
}

const initialState: QuizState = {
  timer: GAME_TIME,
  currentQuestion: 1,
  answers: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer(state, action) {
      state.answers.push(action.payload);
    },
    setTimer(state, action) {
      state.timer = action.payload;
    },
    setCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
    resetGame(state) {
      state.timer = GAME_TIME;
      state.currentQuestion = 1;
      state.answers = [];
    },
  },
});

export const { addAnswer, setTimer, setCurrentQuestion, resetGame } = quizSlice.actions;

export default quizSlice.reducer;
