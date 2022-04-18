import { UPDATE_BOARD } from './types';

export interface UpdateBoard {
	type: string;
	payload: {};
}

export const updateBoard = (boardState: {}): UpdateBoard => {
	return {
		type: UPDATE_BOARD,
		payload: boardState,
	};
};
