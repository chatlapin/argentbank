import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGlobalCredentials: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', action.payload.token);
      }
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
    },
  },
});

export const { setGlobalCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
