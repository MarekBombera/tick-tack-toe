import { UPDATE_SCORE, UpdateScore } from '../actions';

type Score = {
	x: number;
	o: number;
	ties: number;
};

const score = {
	x: 0,
	o: 0,
	ties: 0,
};

export const scoreReducer = (state: Score = score, action: UpdateScore) => {
	switch (action.type) {
		case UPDATE_SCORE:
			return action.payload;
		default:
			return state;
	}
};
