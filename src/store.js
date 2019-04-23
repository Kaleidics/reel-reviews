import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {upcomingReducer} from './reducers';

export default createStore(upcomingReducer, applyMiddleware(thunk));