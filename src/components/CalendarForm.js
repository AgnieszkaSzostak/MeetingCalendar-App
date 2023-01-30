import React from 'react';
import { validateForm } from '../validator';
import { saveMeetingAction, setErrorsAction} from '../actions/calendar';
import { sendData } from '../providers/provider';
import { connect } from 'react-redux';
import { fields } from '../fields';
import { CalendarField } from './CalendarField';
import Submit from './Submit';
import { StyledCalendarForm } from '../styled/CalendarForm.styled';

class CalendarForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
    }
    render() {
        const CalendarFields = fields.map(field => {
            return (
                <CalendarField 
                    key={field.inputName} 
                    onChange={this.handleFieldChange} 
                    value={this.state[field.inputName]} 
                    label={field.label} 
                    name={field.inputName} 
                    placeholder={field.placeholder}
                />
            )
        })

        return (
            <StyledCalendarForm action="" onSubmit={ this.handleSubmit }>
                <h1>Calendar Form</h1>
                {CalendarFields}
                <Submit/>
            </StyledCalendarForm>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {setErrors} = this.props;

        const  newErrors = validateForm(this.state);
        if(newErrors !== null){
            setErrors(newErrors);
        }else{
            this.sendMeetingToApi(this.state)
            this.clearFormFields();
        }
    }

    handleFieldChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    

    sendMeetingToApi = (meetingData) => {
        sendData(meetingData)
            .then(resp => {
                this.props.save(resp)
            })
    }

    clearFormFields() {
        const fieldsData = this.state;
        for(const prop in fieldsData) {
            fieldsData[prop] = '';
        }
        this.setState(fieldsData);
    }

}

const mapStateToProps = (state, props) => {
    return {
        errors: state.errors
    }
}

const mapActionToProps = {
    save: saveMeetingAction,
    setErrors: setErrorsAction, 
}



export default connect(mapStateToProps, mapActionToProps) (CalendarForm)