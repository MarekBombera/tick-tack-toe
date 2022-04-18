import { updateScore } from '../actions';

export const resetScore = (dispatch: Function): void => {
	dispatch(updateScore({ x: 0, o: 0, ties: 0 }));
};
