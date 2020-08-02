import React, { Fragment } from "react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
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
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
