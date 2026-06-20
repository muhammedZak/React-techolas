import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    deleteUser: (state, action) => {
      state.user = state.user.filter((item, index) => index !== action.payload);
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
