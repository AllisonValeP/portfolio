import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
     
     
    body, input, textarea, button {
       font: 400 1rem 'Lexend Deca', sans-serif;
       color: ${props => props.theme['white']}
    }

    body{
        background-color:${props => props.theme['gray-900']};
    }
    }`