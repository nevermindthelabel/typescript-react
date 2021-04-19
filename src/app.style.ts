import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/beach.jpg";

export const GlobalStyle = createGlobalStyle`

#root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    background-image: url(${BackgroundImage});
    background-size: cover;
    margin: 0;
    padding: 0;
    padding: 0 20px;
}
body {
    margin: 0;
    padding: 0;
}
main {
    display: grid;
    grid-column: 1 / -1;
    place-items: start center;
}
header {
    display: grid;
    place-items: center center;
    grid-column: 1 / -1;
}
footer {
    display: grid;
    grid-column: 1 / -1;
    place-items: center center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
    display: grid;
    place-items: center;
  > p {
    color: #ffffff;
  }
  .score {
      #ffffff;
      font-size: 2rem;
      margin: 0
  }
  h2 {
      font-family: Fascinate Inline;
      background-image: linear-gradient(180deg, #ffffff, #87f1ff);
      background-size: 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      filter: drop-shadow(2px 2px #0085a3);
      font-size: 70px;
      font-weight: 400;
      text-align: center;
      margin: 20px
      }
      .start, .next {
          cursor: pointer;
          background: linear-gradient(180deg, #ffffff, #ffcc91);
          border: 2px solid #d38558;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          height: 40px;
          margin: 20px 0;
          padding: 0 40px;
      }
      .start {
          max-width: 200px;
      }
      `;
