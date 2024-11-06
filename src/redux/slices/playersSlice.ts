import {createSlice} from '@reduxjs/toolkit';
import {Player} from '../../types';
import {DummyPlayers} from '../../constants/players';

interface PlayersState {
  players: Player[];
}
const initialState: PlayersState = {players: DummyPlayers};
export const playersSlice = createSlice({
  name: 'players',
  initialState: initialState,
  reducers: {},
});

export default playersSlice.reducer;
