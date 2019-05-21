import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Reducer } from './reducers';

//orginally combining state when using redux-forms, but decided to use React's native form handling
//possible need for combine Reducers when refactoring reducers module into respective component modules
const store = createStore(
    combineReducers({
        app: Reducer
    }),
    applyMiddleware(thunk)  // ajax handling
);

export default store;