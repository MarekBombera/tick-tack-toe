import { updateBoard } from '../actions';
import { dispatchChangeTurn } from './dispatchChangeTurn';

export const dispatchClickedTile = (
	tileId: string,
	boardReducer: any,
	turnReducer: string,
	XO: string,
	dispatch: Function
): string | undefined => {
	if (XO.length !== 0) {
		return;
	}
	const newBoardObj = { ...boardReducer };

	switch (tileId) {
		case 'aa':
			newBoardObj.aa = turnReducer;
			break;
		case 'ab':
			newBoardObj.ab = turnReducer;
			break;
		case 'ac':
			newBoardObj.ac = turnReducer;
			break;
		case 'ba':
			newBoardObj.ba = turnReducer;
			break;
		case 'bb':
			newBoardObj.bb = turnReducer;
			break;
		case 'bc':
			newBoardObj.bc = turnReducer;
			break;
		case 'ca':
			newBoardObj.ca = turnReducer;
			break;
		case 'cb':
			newBoardObj.cb = turnReducer;
			break;
		case 'cc':
			newBoardObj.cc = turnReducer;
			break;
		default:
			return;
	}
	dispatchChangeTurn(turnReducer, dispatch);
	dispatch(updateBoard(newBoardObj));
};
