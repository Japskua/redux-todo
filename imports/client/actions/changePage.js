/**
 * Created by japskua on 10.5.2016.
 */

export default function changePage(currentPageNumber) {
    return {
        type: 'CHANGE_PAGE',
        currentPageNumber
    };
}
