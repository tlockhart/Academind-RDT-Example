import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './usersSlice';

// export default configureStore({
//     reducer: {
//         todos: todoReducer,
//     }
// });

const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
    }
});

export default store;