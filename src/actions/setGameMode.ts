import { SET_GAME_MODE } from './types';

export interface SetGameMode {
	type: string;
	payload: string;
}

export const setGameMode = (gameMode: string): SetGameMode => {
	return {
		type: SET_GAME_MODE,
		payload: gameMode,
	};
};
