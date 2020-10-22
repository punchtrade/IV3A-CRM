import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (description, dueDate, date, select, name, members) => {
    const action = {
        type: ADD_REMINDER,
        select,
        description,
        dueDate,
        date,
        name,
        members
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



