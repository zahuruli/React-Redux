import { GET_TODOS_FAIL, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../constant/todosConstant';
import axios from 'axios';

const Url = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get(Url);
        const todo = await res.data;
        dispatch({ type: GET_TODOS_SUCCESS, payload: todo });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAIL, payload: error.message });
    }
};
