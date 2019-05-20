import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 0.9vw;

        @media (max-width: 1400px) {
            font-size: 1.2vw;
        }
    }

    body, *, html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
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
