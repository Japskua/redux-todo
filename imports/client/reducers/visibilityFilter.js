/**
 * Created by japskua on 10.5.2016.
 */

export default function visibilityFilter(state = 'SHOW_ALL', action = {}) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}
