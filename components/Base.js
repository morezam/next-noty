import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        padding: 0;
        margin:0;
        box-sizing: inherit;
    }

    html{
        font-size: 50%;
        @media only screen and (min-width: 800px){
            font-size: 56.25%
        }
        @media only screen and (min-width: 1200px){
            font-size: 62.5%
        }
    }

    body{
        font-family: 'Ubuntu', sans-serif;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    :root{
        --primary-color: #393e46; //rgb(57, 62, 70)
        --secondary-color: #aad8d3; //rgb(170, 216, 211)
        --gray-color: #eeeeee; //rgb(238, 238, 238)
        --white-color: #f7f3e9; //rgb(247, 243, 233)
    }

    h1,
    h2,
    h3{
        font-family: 'Krona One', sans-serif;
    }
`;

export default GlobalStyle;
