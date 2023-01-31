import styled from "styled-components"

const StyledCalendar = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
    display: grid;
    
    grid-template-columns: 1fr 2fr;
    @media(max-width: 950px){
        grid-template-columns: 1fr;
        grid-template-rows: 50% 50%;
        > div:last-child{
            overflow: scroll;
        }
    }
`

export {StyledCalendar}