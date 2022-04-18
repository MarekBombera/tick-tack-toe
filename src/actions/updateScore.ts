import { UPDATE_SCORE } from './types';

export interface UpdateScore {
	type: string;
	payload: {};
}

export const updateScore = (score: {}): UpdateScore => {
	return {
		type: UPDATE_SCORE,
		payload: score,
	};
};
