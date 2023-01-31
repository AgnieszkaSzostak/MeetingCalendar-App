import styled from "styled-components";

const StyledCalendarForm = styled.form.attrs(props => ({
    onSubmit: props.onSubmit,
    action: props.action

}))`

    background-color: rgba(255,255,255,0);
    padding: 1em;
    display: flex;
    flex-direction: column;
    h1 {
        color: rgba(62, 80, 91, 0.8);
        width: 90%;
        margin-bottom: 0.5em;
        border-bottom: 1px solid rgba(62, 80, 91, 0.8);
        padding: 1em 0 0.5em;
        font-size: 2em;
        text-align: center;
    }
    span{
        color: #BF4D33;
    }
    label {
        color: #999;
        display: flex;
        flex-direction: column;
        
        input{ 
            color: black;
            width: 90%;
            margin: 1em 0;
            background-color: rgba(255,255,255,0);
            padding: 0.5em;
            border: 1px solid #c6c6c6;;
            &:hover{
                border: 1px solid rgb(62, 80, 91);;
                
            }
            &:focus {
                outline: 0px;
                border: 1px solid rgb(62, 80, 91);;
            }
            &::active{
                background-color: #425560;
                
            }
        }
    }
    @media(max-width: 950px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 150px 1fr 1fr 1fr;
        h1{ 
            grid-column: 1/3;
            margin: 0 25px auto auto;
        } 
        input {
            margin: 1em 0;
        }
        div:last-child{
            display: flex;
            justify-content: start;
            align-items: center;
        }

    }
    
    `

export {StyledCalendarForm}