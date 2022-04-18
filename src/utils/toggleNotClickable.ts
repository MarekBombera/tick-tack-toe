import { setNotClickable } from '../actions';

export const toggleNotClickable = (
	dispatch: Function,
	notClickableReducer: boolean
): void | Function => {
	if (notClickableReducer) {
		const timer = setTimeout(() => {
			dispatch(setNotClickable(false));
		}, 1500);

		return () => clearTimeout(timer);
	}
};
