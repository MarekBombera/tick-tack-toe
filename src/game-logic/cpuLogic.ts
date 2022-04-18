export const cpuLogic = (
	turnReducer: string,
	pickedMarkReducer: boolean,
	boardReducer: {},
	dispatchNextTurn: Function
): void => {
	const randomTile = Math.floor(Math.random() * 9);

	if (pickedMarkReducer && turnReducer === 'o') {
		cpuPicksATile(turnReducer, randomTile, boardReducer, dispatchNextTurn);
	}

	if (!pickedMarkReducer && turnReducer === 'x') {
		cpuPicksATile(turnReducer, randomTile, boardReducer, dispatchNextTurn);
	}
};

const cpuPicksATile = (
	turnReducer: string,
	randomTile: number,
	boardReducer: {},
	dispatchNextTurn: Function
) => {
	const boardEntries = Object.entries({ ...boardReducer });

	//Tries random tile if if free
	if (boardEntries[randomTile][1] === '') {
		boardEntries[randomTile][1] = turnReducer;
		dispatchNextTurn(Object.fromEntries(boardEntries));
		return;
	}

	//If random tile fails picks first available tile
	for (let i in boardEntries) {
		if (boardEntries[i][1] === '') {
			boardEntries[i][1] = turnReducer;
			dispatchNextTurn(Object.fromEntries(boardEntries));
			return;
		}
	}
};
