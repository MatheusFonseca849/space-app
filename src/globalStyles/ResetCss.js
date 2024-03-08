import { createGlobalStyle } from "styled-components";
import  GandhiSansRegular  from "./fonts/GandhiSans-Regular.otf";
import  GandhiSansBold  from "./fonts/GandhiSans-Bold.otf";

const ResetCss = createGlobalStyle`

@font-face {
    font-family: 'GandhiSansRegular';
    src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
}

@font-face {
    font-family: 'GandhiSansBold';
    src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
}

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
    font-family: 'GandhiSansRegular';
}

body{
    
    background: linear-gradient(174.61deg,#041833 4.16%,#04244f 48%,#154580 96.76%);
    height: 100vh;
    max-width: 100%;
    margin: 0 auto;

}

main{

    display: flex;

}

button{

    cursor: pointer;

}

`

export default ResetCss