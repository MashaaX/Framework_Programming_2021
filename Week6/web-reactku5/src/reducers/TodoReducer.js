
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../action/actionsTypes'

// const INITIAL_DATA = [
//     {
//         id: 0,
//         text: ' walk the dog ',
//     },
//     {
//         id:1,
//         text: ' learn Redux '
//     }
// ]

const INITIAL_DATA = []

const TodoReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case REMOVE_TODO:
            const numIndex = parseInt(action.id)
            return state.filter(todo => todo.id !== numIndex);
        default:
            return state
    }
}
export default TodoReducer