import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO_ITEM
} from '../types';

export const addtodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const deletetodo = (todo, id) => {
    console.log(todo, id)
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const editedtodoData = (data, index) => {
    // console.log(data)

    return {
        type: EDIT_TODO_ITEM,
        payload: {
            data, index
        }
    }
}