import { SET_PICKED_MARK } from './';

export interface SetPickedMark {
	type: string;
	payload: boolean;
}

// X = true , O = false
export const setPickedMark = (mark: boolean): SetPickedMark => {
	return {
		type: SET_PICKED_MARK,
		payload: mark,
	};
};
