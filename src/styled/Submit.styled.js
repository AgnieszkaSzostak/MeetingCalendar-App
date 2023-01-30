import styled from "styled-components"

const StyledSubmit = styled.input.attrs(props => ({
    type: "submit",
    value: "save"
}))`

    outline: none;
    cursor: pointer;
    width: 90%;
    padding: 10px;
    font-family: "Source Sans Pro", sans-serif;
    color: rgb(62, 80, 91);
    border: 2px solid rgb(62, 80, 91);
    background-color: rgba(62,80,91, 0.2);
    transition: background-color 0.7s ease-in-out;

    &:hover{
        background-color: rgba(62, 80, 91, 0.8);
        color: white;
    }
`

export {StyledSubmit}