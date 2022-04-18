import { changeTurn } from '../actions';

export const dispatchChangeTurn = (
	turnReducer: string,
	dispatch: Function
): void => {
	if (turnReducer === 'x') dispatch(changeTurn('o'));
	if (turnReducer === 'o') dispatch(changeTurn('x'));
	if (turnReducer === 'reset') dispatch(changeTurn('x'));
};
