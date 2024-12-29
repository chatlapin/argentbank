import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/auth/authSlice'
import { userSlice } from '../features/user/userSlice'

const state = {}

// Issue 6: State management is done through Redux, with a store, actions, and reducers for handling application state changes.
const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        auth: authSlice.reducer,
        user: userSlice.reducer,
    }),
})

export default store
