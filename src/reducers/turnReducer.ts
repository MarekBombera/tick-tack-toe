import { CHANGE_TURN, ChangeTurn } from '../actions';

export const turnReducer = (state: string = 'x', action: ChangeTurn) => {
	switch (action.type) {
		case CHANGE_TURN:
			return action.payload;
		default:
			return state;
	}
};
