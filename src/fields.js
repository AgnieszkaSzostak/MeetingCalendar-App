export const fields = [
    {
        label: 'Date:',
        inputName: 'date',
        placeholder: 'RRRR-MM-DD',
        required: true,
        pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
        error: 'Incorrect date',
    },
    {
        label: 'Time:',
        inputName: 'time',
        placeholder: 'HH:MM',
        required: true,
        pattern: '^[0-9]{2}:[0-9]{2}$',
        error: 'Incorrect time',
    },
    {   
        label: 'First name:',
        inputName: 'firstName',
        required: true,
    },
    {   
        label: 'Last name:',
        inputName: 'lastName',
        required: true,
    },
    {   
        label: 'Email:',
        inputName: 'email',
        placeholder: 'example@domain.pl',
        required: true,
        pattern: '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$',
        error: 'Incorrect email address'
    },
]