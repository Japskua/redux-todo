/**
 * Created by japskua on 10.5.2016.
 */

export default function toggleTodo(id) {
    return () => {
        Meteor.call('toggleTodo', id);
    };
}
