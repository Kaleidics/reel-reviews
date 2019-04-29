import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {Reducer} from './reducers';

// export default createStore(Reducer, applyMiddleware(thunk));

const store = createStore(
    combineReducers({
        form: formReducer,
        app: Reducer
    }),
    applyMiddleware(thunk)  // ajax handling
);

export default store;