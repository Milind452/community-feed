import { createGlobalStyle } from "styled-components";

import Header from "../components/Header/Header";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", "Roboto", "Oxygen","Ubuntu",  
        "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;  
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;
