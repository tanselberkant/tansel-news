import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload;
    },
    deleteUser: (state) => {
      state.userName = '';
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
