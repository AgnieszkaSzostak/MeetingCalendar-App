import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMeetingsAction } from '../actions/calendar';
import { loadData } from '../providers/provider';
import { StyledCalendarList } from '../styled/ CalendarList.styled';
import CalendarContainer from './CalendarContainer';

const CalendarList = () => {
    const meetings = useSelector(state => state.meetings);
    const dispatch = useDispatch();

    const loadMeetingsFromApi = () => {
        loadData()
            .then(resp => {
                dispatch(loadMeetingsAction(resp))
            })
    }
    useEffect(()=> {
        loadMeetingsFromApi()
    }, [])

    const  renderMeetingsItem = (itemData) => {
        return (
            <li key={itemData.id}>
                <table>
                    <thead>
                        <tr>
                            <th>Date:</th>
                            <th>Time:</th>
                            <th>With:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{itemData.date}</td>
                            <td>{itemData.time}</td>
                            <td>
                                <a href={`mailto: ${itemData.email}`}>
                                    {itemData.firstName} {itemData.lastName}
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </li>
        )
    }
    const renderMeetingsList = () => {
        return meetings.map(item => 
            renderMeetingsItem(item)
        );
    }
    return (
        <CalendarContainer>
            <h2>Meetings</h2>
            <StyledCalendarList>
            {renderMeetingsList()}
        </StyledCalendarList>
        </CalendarContainer>
    )
}

export default CalendarList