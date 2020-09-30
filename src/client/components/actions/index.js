import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS, DELETE_SELECTS } from '../constants';

export const addReminder = (text, dueDate, date, select) => {
    const action = {
        type: ADD_REMINDER,
        select,
        text,
        dueDate,
        date
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}

export const deleteSelect = (select, value) => {
    const action = {
        type: DELETE_SELECTS,
        select,
        value
    }
    console.log('deleting in actions', action);
    return action;
}

