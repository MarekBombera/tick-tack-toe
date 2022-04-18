import { SET_GAME_MODE, SetGameMode } from '../actions';

export const gameModeReducer = (
	state: string = 'menu',
	action: SetGameMode
) => {
	switch (action.type) {
		case SET_GAME_MODE:
			return action.payload;
		default:
			return state;
	}
};
