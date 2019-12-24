import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
                  box-sizing: border-box;
    }

    *:before, *:after {
        -webkit-box-sizing: border-box;
             -moz-box-sizing: border-box;
                 box-sizing: border-box;
    }


html, body, #root {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: #000; 
    color: #333;
    -webkit-font-smoothing: antialiased !important;
}
`;
