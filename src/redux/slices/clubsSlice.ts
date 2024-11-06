import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Club} from '../../types';
import {DummyClubs} from '../../constants/clubs';

interface ClubState {
  clubs: Club[];
}
const initialState: ClubState = {clubs: DummyClubs};
export const clubSlice = createSlice({
  name: 'club',
  initialState: initialState,
  reducers: {
    addClub: (state, action: PayloadAction<Club>) => {
      state.clubs.push(action.payload);
    },
  },
});

export const {addClub} = clubSlice.actions;
export default clubSlice.reducer;
