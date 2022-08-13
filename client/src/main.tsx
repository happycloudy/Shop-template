import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './core/theme/styles'
import {ThemeProvider} from "styled-components";
import {theme} from "./core/theme/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
        <GlobalStyles/>
    </React.StrictMode>
)
