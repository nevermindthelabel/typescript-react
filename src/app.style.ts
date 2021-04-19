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
    place-items: center;
}
body {
    margin: 0;
    padding: 0;
}
main {
    grid-column: 1 / -1;
}
header {
    display: grid;
    place-items: center center;
    grid-column: 1 / -1;
    color: pink;
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
