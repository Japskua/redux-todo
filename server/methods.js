/**
 * Created by japskua on 10.5.2016.
 */
import Todos from '../imports/collection';

Meteor.methods({
    addTodo(text) {
        const todos = Todos.insert({
            text,
            completed: false
        });
        return todos;
    },
    toggleTodo(id) {
        const todoInQuestion = Todos.findOne({ _id: id }, { fields: { completed: true } });
        const completed = todoInQuestion.completed;
        return Todos.update({ _id: id }, { $set: { completed: !completed } });
    }
});
