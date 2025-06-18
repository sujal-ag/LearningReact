import React, { createContext, useContext } from 'react'

export const TodoContext  = createContext({
    todos: [{
        id: 1,
        text: 'Learn React Context',
        completed: false
    }],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}