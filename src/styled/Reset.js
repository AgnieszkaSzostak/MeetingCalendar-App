import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
    * {
        margin :0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
        font-family: "Source Sans Pro", sans-serif;
    }
`

export default ResetStyle