import React, { Fragment } from "react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <h2>app works</h2>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
