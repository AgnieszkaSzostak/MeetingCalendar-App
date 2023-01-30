export const loadMeetingsAction = (meetings) => {
    return {
        type: 'loadMeetings',
        payload: meetings
    }
}
export const saveMeetingAction = (meeting) => {
    return {
        type: 'saveMeeting',
        payload: meeting
    }
}

export const addFormAction = (data) => {
    return {
        type: 'addForm',
        payload: data
    }
}
export const setErrorsAction = (data) => {
    return {
        type: 'setErrors',
        payload: data
    }
}