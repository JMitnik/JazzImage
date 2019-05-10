import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, *, html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lora', sans-serif;
    }

    h1, h2, h3, h4 {
        font-family: 'Lora', sans-serif;
    }
`;

export default GlobalStyles;
