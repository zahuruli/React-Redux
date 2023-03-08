import { GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../constant/todosConstant';

const initialStates = {
    isLoading: false,
    todos: [],
    error: null
};

export const todosReducer = (state = initialStates, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
};
