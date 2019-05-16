import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, *, html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 100;
    }

    p {
        font-weight: 100;
    }

    h1, h2, h3, h4 {
        font-weight: 1000;
    }

    h1, h2, h3, h4, p {
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyles;
