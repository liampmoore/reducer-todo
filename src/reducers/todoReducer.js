const todoInitialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                item: action.payload.value,
                completed: false,
                id: new Date()
            }];
        case 'COMPLETE':
            return state.map((todoItem) => {
                if (todoItem.id === action.payload.key) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    }
                }
                else return {
                    ...todoItem
                }
            });
        case 'CLEAR':
            return state.filter((item) => {
                return !item.completed
            })
       default: return state;
    }
}

export {todoReducer, todoInitialState};