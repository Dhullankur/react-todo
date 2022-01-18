import {
    ADD_TODO, DELETE_TODO, EDIT_TODO_ITEM
} from '../types';

const defaultTODO = {
    todos: []
}


const todoReducer = (state = defaultTODO, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            const deleteitem = state.todos.splice(action.payload, 1);
            // console.log(state.todos)
            return {
                todos: [...state.todos]
            }
        case EDIT_TODO_ITEM:
            // console.log(action.payload)
            // console.log(state.todos)
            state.todos[action.payload.index].title = action.payload.data.title;
            state.todos[action.payload.index].description = action.payload.data.description;
            // console.log(editedItem)
            return {
                todos: [...state.todos]
            }
        default:
            return state;
    }
}
export default todoReducer;