import { fields } from "./fields";

export const validateForm = (state) => {
    let errors = null;
    fields.forEach(function(field){
        const {inputName, required = false, pattern = null, error = null} = field
        const value = state[inputName]
        console.log('v', value)
        if(required) {
            if(value.length === 0) {
                console.log('length=0')
                errors = {...errors, [inputName]: 'Pole obowiązkowe'}
            }else if(pattern){
                const reg = new RegExp(pattern)
                if(!reg.test(value)){
                    errors = {...errors, [inputName]: error}
                }
            } 
        }
    })
    console.log('val', errors)
    return errors;
    // const {firstName, lastName, email, date, time} = state;

    // if(!isDateCorrect(date)) {
    //     errors.push('Popraw wprowadzoną datę');
    // }

    // if(!isTimeCorrect(time)) {
    //     errors.push('Popraw wprowadzoną godzinę')
    // }

    // if(!isFirstNameCorrect(firstName)) {
    //     errors.push('Wprowadź imię');
    // }

    // if(!isLastNameCorrect(lastName)) {
    //     errors.push('Wprowadż nazwisko')
    // }

    // if(!isEmailCorrect(email)) {
    //     errors.push('Wprowadź poprawny adres email');
    // }
}

const isDateCorrect = (value) => {
    const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    return pattern.test(value);
}

const isTimeCorrect = (value) => {
    const pattern = /^[0-9]{2}:[0-9]{2}$/
    
    return pattern.test(value);
}

const isFirstNameCorrect = (value) => {
    return value.length > 0;
}

const isLastNameCorrect = (value) => {
    return value.length > 0;
}

const isEmailCorrect = (value) => {
    const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

    return pattern.test(value);
}