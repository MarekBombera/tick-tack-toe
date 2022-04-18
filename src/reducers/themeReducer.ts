import { SWITCH_THEME, SwitchTheme } from '../actions';

export const themeReducer = (state: string = 'dark', action: SwitchTheme) => {
	switch (action.type) {
		case SWITCH_THEME:
			return action.payload;
		default:
			return state;
	}
};
