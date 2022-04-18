import { SET_PICKED_MARK, SetPickedMark } from '../actions';

// X = true , O = false
export const pickedMarkReducer = (
	state: boolean = true,
	action: SetPickedMark
) => {
	switch (action.type) {
		case SET_PICKED_MARK:
			return action.payload;
		default:
			return state;
	}
};
