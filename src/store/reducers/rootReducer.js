const initState = {
    users: [
        {
            id: 1,
            name: 'Minh'
        },
        {
            id: 2,
            name: 'Binh'
        },
        {
            id: 3,
            name: 'Nam'
        }
    ],
    posts: []
}

const rootReducers = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 101);
            let user = {id: id, name: `random - ${id}`}
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }
}

export default rootReducers;