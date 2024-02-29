import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`

html,
body,
header,
section,
select,
main,
nav,
div,
ul,
li,
img,
button,
input,
figure,
h1,
h2,
h3,
a,
p {
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0;
    border: none;
    text-align: unset;
}

body{
    
    background: linear-gradient(174.61deg,#041833 4.16%,#04244f 48%,#154580 96.76%);
    height: 100vh;
    width: 100vw;

}

button{

    cursor: pointer;

}

`

export default ResetCss