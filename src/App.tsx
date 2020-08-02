import React, { Fragment } from "react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./index.css";
import { start } from "repl";

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <Fragment>
      <Header />
      <main>
        <h2>React Quiz</h2>
        <button className="start" onClick={startTrivia}></button>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
