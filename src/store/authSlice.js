import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = {
        uuid: action.payload.uuid,
        email: action.payload.email,
      };
    },
    clearUser: state => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
