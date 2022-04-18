import { UPDATE_BOARD, UpdateBoard } from '../actions';
import { boardLayout } from '../components/Board/boardLayout';

export const boardReducer = (
	state: {} = { ...boardLayout },
	action: UpdateBoard
) => {
	switch (action.type) {
		case UPDATE_BOARD:
			return action.payload;
		default:
			return state;
	}
};
