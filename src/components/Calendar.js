import React from 'react';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import { StyledCalendar } from '../styled/Calendar.styled';

class Calendar extends React.Component {
    render() {
        return (
            <StyledCalendar>
                <CalendarForm />
                <CalendarList />
            </StyledCalendar>
        )
    }
}

export default Calendar;