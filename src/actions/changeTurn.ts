import { CHANGE_TURN } from './types';

export interface ChangeTurn {
	type: string;
	payload: string;
}

export const changeTurn = (currentTurn: string): ChangeTurn => {
	return {
		type: CHANGE_TURN,
		payload: currentTurn,
	};
};
