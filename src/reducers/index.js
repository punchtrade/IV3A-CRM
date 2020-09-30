import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, DELETE_SELECTS } from '../client/components/constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    let { text, dueDate, date, select } = action;
    return {
        id: Math.random(),
        select,
        text,
        dueDate,
        date

    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reducer reminders', reminders);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

const removeByValue = (state = [], value) => {
    const selects = state.filter(select => select.value !== value);
    console.log('new reducer selects', selects);
    return selects;
}

const selects = (state = [], action) => {
    let selects = null;
    state = read_cookie('selects');
    switch(action.type) {
        case DELETE_SELECTS:
            selects = removeByValue(state, action.value);
            bake_cookie('selects', selects);
            return selects;
            default: 
            return state;
    }
}

export default reminders;