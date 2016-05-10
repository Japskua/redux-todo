/**
 * Created by japskua on 10.5.2016.
 */
/*  globals Counts */

import Todos from '../imports/collection';

const todoPubFields = {
    text: 1,
    completed: 1
};

const getTodoPublication = (filter, pageSkip = 0) => {
    const query = {};

    switch (filter) {
        case 'SHOW_COMPLETED':
            query.completed = true;
            break;
        case 'SHOW_ACTIVE':
            query.completed = false;
            break;
        default:
            break;
    }

    return Todos.find(query, {
        fields: todoPubFields,
        skip: pageSkip,
        limit: 10
    });
};

Meteor.publish('getTodos', getTodoPublication);
