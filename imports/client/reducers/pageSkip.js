/**
 * Created by japskua on 10.5.2016.
 */
const PER_PAGE_SKIP = 10;

export default function pageSkip(state = 0, action = {}) {
    switch (action.type) {
        case 'CHANGE_PAGE':
            // Take the current page number from the payload
            return action.currentPageNumber * PER_PAGE_SKIP;
        default:
            return state;
    }
}
