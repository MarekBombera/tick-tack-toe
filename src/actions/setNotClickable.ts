import { SET_NOT_CLICKABLE } from '.';

export interface SetNotClickable {
	type: string;
	payload: boolean;
}

export const setNotClickable = (payload: boolean): SetNotClickable => {
	return {
		type: SET_NOT_CLICKABLE,
		payload: payload,
	};
};
