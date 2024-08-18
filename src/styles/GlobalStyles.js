import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #ecbf88;
        --color-primary-0: #dc5840;

        --color-secondary: #1c2433;
        --color-secondary-0: #2f4f4f;
        --color-secondary-1: #212a39;
        --color-secondary-2: #7f899b;
        --color-secondary-3: #98a5b9;

        --color-text: #222;
        --color-text-0: #747474;
        --color-text-1: #959595;
        --color-text-2: #f5f5f5;

        --color-bg: #dcdcdc;
        --color-bg-header: #2f4f4f;

        --color-white: #fff;
        --color-white-0: #f1f1f1;

        --shadow-sm: 0 2px 4px rgba(0, 0, 0, .09);
        --shadow-md: 2px 2px 6px rgba(0, 0, 0, .096)
    }

    *,::before,::after {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--color-bg);
        font-family: 'Lato', sans-serif;
        line-height:1.4;
        color: var(--color-text-0);
        font-weight: 400;
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all .3s;
    }
    a:hover,
    a.active {
        color: var(--color-primary);
        position: relative;
    }

    ul {
        list-style: none;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
        margin-block-end: inherit;
        margin-block-start: inherit;
    }
`;

export default GlobalStyle;
