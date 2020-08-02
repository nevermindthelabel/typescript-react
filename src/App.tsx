import React, { Fragment } from "react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import QuestionCard from "./components/QuestionCard";
import "./index.css";

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <Fragment>
      <Header />
      <main>
        <h2>React Quiz</h2>
        <button className="start" onClick={startTrivia}>
          Start Game
        </button>
        <p className="score"></p>
        <p>loading .....</p>
        <QuestionCard />
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
