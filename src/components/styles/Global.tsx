import { createGlobalStyle } from 'styled-components';
import { showBoard, showBoardUI } from './keyframes';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body,
#root,
.App {
	height: 100%;
	margin: 0;
	scroll-behavior: smooth; 
}

p {
	font-family: 'Outfit';
}

h1,h2,h3,h4 {
	font-family: 'Outfit';
}

button {
	font-family: 'Outfit';
}

:root {
   --dark-green: rgba(31, 54, 65);
   --background: rgba(26, 42, 51);
	--silver: rgba(168, 191, 201);
	--yellow: rgba(242, 177, 55);
	--green-blue: rgba(49, 195, 189);
	--shadow-dark: rgba(16, 33, 42, 1);
	--shadow-yellow: rgba(204, 139, 19);
	--shadow-silver:  rgba(107, 137, 151);
	--shadow-green-blue: rgba(17, 140, 135);

	// HOVER
	--silver-hover: rgba(219, 232, 237);
	--yellow-light-hover: rgba(255, 200, 96);
	--green-blue-light-hover: rgba(101, 233, 228);
	--shadow-silver-hover: rgba(107, 137, 151);
	--shadow-yellow-hover: rgb(187, 140, 52);
	--shadow-green-blue-hover: rgba(17, 140, 135);

	// THEME
	--background-light-theme: rgb(220, 239, 250);
	--tiles-light-theme: rgba(71,104,122);

	
	// SVG
	--silver-svg: brightness(0) saturate(100%) invert(87%) sepia(15%) saturate(317%) hue-rotate(153deg) brightness(86%) contrast(87%);
	--background-svg: brightness(0) saturate(100%) invert(14%) sepia(29%) saturate(642%) hue-rotate(158deg) brightness(91%) contrast(95%);
	--theme-sun-svg: brightness(0) saturate(100%) invert(55%) sepia(61%) saturate(6190%) hue-rotate(35deg) brightness(95%) contrast(103%); C
	--theme-moon-svg: brightness(0) saturate(100%) invert(10%) sepia(33%) saturate(6553%)
	hue-rotate(248deg) brightness(77%) contrast(123%);

	// TRANSITION / ANIMATION
	--themeSwitch-transition: background 0.25s ease-out;
	--show-board-keyframe: ${showBoard} 1.5s 1 ease-out forwards;
	--show-boardUI-keyframe: ${showBoardUI} 0.5s 1.5s 1 ease-out forwards;
}
`;
