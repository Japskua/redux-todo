/**
 * Created by japskua on 10.5.2016.
 */
import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

function AddTodo({ dispatch }) {
    let input;
    return (
        <div>
            <input
                ref={function (node) {
                    input = node;
                }}
            />
            <button
                onClick={function () {
                    console.log('YO');
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
            Add Todo
            </button>
        </div>
    );
}
AddTodo.propTypes = { dispatch: React.PropTypes.func };

export default connect()(AddTodo);
