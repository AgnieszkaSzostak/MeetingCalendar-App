const initState = {
    meetings: [],
    form: {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
    },
    errors: null,
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case 'setErrors':
            const newState = {
                ...state, 
                errors: action.payload
            }
            return newState
        case 'loadMeetings':
            return {
                ...state,
                meetings: action.payload
            }
        case 'saveMeeting':
            return {
                ...state,
                meetings: [...state.meetings, action.payload]
            }
        case 'addForm':
            return {
                ...state,
                form: action.payload
            }
        default: 
        return state
    }
}