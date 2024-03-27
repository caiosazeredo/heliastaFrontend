import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 12px;
        scroll-behavior: smooth;
    }

    body{
        background: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['gray-900']}
    }
   
`