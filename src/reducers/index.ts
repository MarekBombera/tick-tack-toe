import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';
import { gameModeReducer } from './gameModeReducer';
import { notClickableReducer } from './notClickableReducer';
import { pickedMarkReducer } from './pickedMarkReducer';
import { scoreReducer } from './scoreReducer';
import { themeReducer } from './themeReducer';
import { turnReducer } from './turnReducer';
import { winnerReducer } from './winnerReducer';

export const rootReducer = combineReducers({
	boardReducer,
	gameModeReducer,
	notClickableReducer,
	pickedMarkReducer,
	scoreReducer,
	themeReducer,
	turnReducer,
	winnerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
