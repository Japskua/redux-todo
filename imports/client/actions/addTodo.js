/**
 * Created by japskua on 10.5.2016.
 */

export default function addTodo(text) {
    return () => {
        Meteor.call('addTodo', text);
    };
}
