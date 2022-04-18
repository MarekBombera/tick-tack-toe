import { SET_WINNER, SetWinner } from '../actions';

export const winnerReducer = (state: string = '', action: SetWinner) => {
	switch (action.type) {
		case SET_WINNER:
			return action.payload;
		default:
			return state;
	}
};
