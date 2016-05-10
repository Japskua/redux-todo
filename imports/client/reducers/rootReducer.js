/**
 * Created by japskua on 10.5.2016.
 */
import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import pageSkip from './pageSkip';

const rootReducer = combineReducers({
    visibilityFilter,
    pageSkip
});

export default rootReducer;
