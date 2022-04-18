import { SWITCH_THEME } from './types';

export interface SwitchTheme {
	type: string;
	payload: string;
}

export const switchTheme = (theme: string): SwitchTheme => {
	return {
		type: SWITCH_THEME,
		payload: theme,
	};
};
