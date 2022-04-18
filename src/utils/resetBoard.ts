import { changeTurn, updateBoard } from '../actions';
import { boardLayout } from '../components/Board/boardLayout';

export const resetBoard = (dispatch: Function): void => {
	dispatch(changeTurn('reset'));
	dispatch(updateBoard({ ...boardLayout }));
};
