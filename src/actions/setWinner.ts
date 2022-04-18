import { SET_WINNER } from './';

export interface SetWinner {
	type: string;
	payload: string;
}

export const setWinner = (winner: string): SetWinner => {
	return {
		type: SET_WINNER,
		payload: winner,
	};
};
