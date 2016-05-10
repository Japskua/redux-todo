/**
 * Created by japskua on 10.5.2016.
 */

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const logger = createLogger();

const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, logger));

export default Store;
