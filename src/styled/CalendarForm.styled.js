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
   
        input{ 
            color: black;
            width: 90%;
            margin: 1em 0;
            display: block;
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

`

export {StyledCalendarForm}