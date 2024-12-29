import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Add API base URL

// Issue #6: State management is done through Redux
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null
};

// Issue #6: action(s) for sending information
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/v1/user/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.post(`${API_URL}/api/v1/user/profile`, null, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to get user profile');
    }
  }
);

// Issue #5: This data should be persisted to the database
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (userData, { getState }) => {
    const { auth } = getState();
    const response = await axios.put('/api/v1/user/profile', userData, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    return response.data;
  }
);

// Issue #6: reducer(s) for handling application state changes
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.body.token;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.body;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.body;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

