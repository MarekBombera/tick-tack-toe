import { SET_NOT_CLICKABLE, SetNotClickable } from '../actions';

export const notClickableReducer = (
	state: boolean = true,
	action: SetNotClickable
) => {
	switch (action.type) {
		case SET_NOT_CLICKABLE:
			return action.payload;
		default:
			return state;
	}
};
