/*  globals Counts */
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import React from 'react';
import Todos from '../../collection';
import changePage from '../actions/changePage';
import toggleTodo from '../actions/toggleTodo';
import Todo from './Todo.jsx';
import TodoPagination from './TodoPagination.jsx';

class TodoList extends React.Component {
    render() {
        const { dispatch } = this.props;
        const todos = this.props.todoList;
        const pagination = this.props.todoCount > 10 ? (
            <TodoPagination
                handlePageClick={(data)=> {return dispatch(changePage(data.selected))}}
                pageCount={this.props.todoCount/10}
            /> ) : '';
        return (
            <div>
                <ul>
                    {todos.map(todo =>
                        <Todo
                            key={todo._id}
                            {...todo}
                            onClick={() => dispatch(toggleTodo(todo._id))}
                        />
                    )}
                </ul>
                {pagination}
            </div>
        );
    }
}

const TodoContainer = createContainer(({ visibilityFilter, pageSkip }) => {
    const todoSub = Meteor.subscribe('getTodos', visibilityFilter, pageSkip);
    return {
        todoSubReady: todoSub.ready(),
        todoList: Todos.find({}, { limit: 10 }).fetch() || [],
        todoCount: 1
    };
}, TodoList);

function mapStateToProps(state) {
    return {
        visibilityFilter: state.visibilityFilter,
        pageSkip: state.pageSkip
    };
}

export default connect(mapStateToProps)(TodoContainer);
