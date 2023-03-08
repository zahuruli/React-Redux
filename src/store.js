import { todosReducer } from './services/reducers/todosReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(todosReducer, applyMiddleware(thunk));
