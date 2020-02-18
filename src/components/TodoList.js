import React, { useState } from 'react';

import {useReducer } from 'react';
import {todoReducer, todoInitialState} from '../reducers/todoReducer';


import { Container, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

import TodoItem from './TodoItem';






const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, todoInitialState);
    const [inputText, setInput] = useState('');

    const addItemAction = (event, input) => {
        event.preventDefault()
        dispatch({
            type: 'ADD',
            payload: {
                value: input
            }
        })
    }

    const clearAction = () => {
        dispatch({
            type: 'CLEAR'
        })
    }

    return (
        <Container maxWidth='sm'>
            <AppBar color='secondary' position='relative' style={{margin: '20px 0'}}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    
                    <form onSubmit={(event) => {
                            addItemAction(event, inputText)
                        }}>
                    <TextField
                        color='secondary'
                        placeholder='Add a new item...'
                        variant='outlined'
                        size='small'
                        value={inputText}
                        onChange={(event) => {
                            setInput(event.target.value)
                        }}
                    /></form>

                    <Button onClick={() => {
                        clearAction()
                    }}>Clear completed</Button>

                </Toolbar>
            </AppBar>
            {state.map((item) => {
                return <TodoItem item={item.item} completed={item.completed} id={item.id} key={item.key} dispatch={dispatch}/>
            })}
        </Container>
    )
}

export default TodoList;