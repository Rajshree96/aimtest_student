import { createSlice } from '@reduxjs/toolkit';
const initialState: userLevelState = {
  userLevelData: [],
  particularUserLevelData: [],
};

const userLevelSlice = createSlice({
  name: 'userLevel',
  initialState,
  reducers: {
    getAllUserLevel(state, action) {
      state.userLevelData = action.payload;
    },
    getParticularUserLevel(state, action) {
      state.particularUserLevelData = action.payload;
    },
  },
});

export const { getAllUserLevel, getParticularUserLevel } = userLevelSlice.actions;
export default userLevelSlice.reducer;
