import React from 'react';

import {useReducer } from 'react';
import {todoReducer, todoInitialState} from '../reducers/todoReducer';
import { Container } from '@material-ui/core';

import TodoItem from './TodoItem';


const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, todoInitialState);


    return (
        <Container maxWidth='sm'>
            {state.map((item) => {
                return <TodoItem item={item.item} completed={item.completed} key={item.key}/>
            })}
        </Container>
    )
}

export default TodoList;