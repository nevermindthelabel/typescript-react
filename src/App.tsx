import React, { Fragment, useState } from "react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./API";
import { Difficulty, QuestionState } from "./API";
import "./index.css";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const nextQuestion = () => {};

  return (
    <Fragment>
      <Header />
      <main>
        <h2>React Quiz</h2>
        <button className="start" onClick={startTrivia}>
          Start Game
        </button>
        <p className="score">score:</p>
        <p>Loading Questions.....</p>
        {/* <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number]}
          answers={questions[number]}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        /> */}
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
