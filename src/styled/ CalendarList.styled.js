import styled from "styled-components";

const StyledCalendarList = styled.ul`
    padding-top: 3em;
    width:90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
    
    li{
        list-style-type: none;
        /* background-color: rgba(62, 80, 91, 0.8); */
        table{
            display: flex;
            flex-direction: column;
           
            tr{
                display: grid;
                grid-template-columns: 35% 25% 40%;
                padding: 0.5em;
                color: white;
            }

            tr:first-child{
                background-color: rgba(62, 80, 91, 0.8);
                border: 1px solid white;
                border-bottom: 0px;
            }
            tr:last-child{
                font-size: 1.5em;
                border: 1px solid white;
                border-top: 0px;

            }
            td{
                color: rgb(62, 80, 91);
            }
   
            a{
                text-decoration: none;
                color: rgb(62, 80, 91);
                &:hover{
                    text-decoration: underline;
                }
        
            }
        }
    }
`

export {StyledCalendarList}