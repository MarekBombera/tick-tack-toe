export const checkForWin = (gameBoard: {}): string | undefined => {
	const tie = checkForTie(gameBoard);
	const cross = crossWin(gameBoard);
	const row1 = fullRow1Win(gameBoard);
	const row2 = fullRow2Win(gameBoard);
	const row3 = fullRow3Win(gameBoard);
	const column1 = fullColumn1Win(gameBoard);
	const column2 = fullColumn2Win(gameBoard);
	const column3 = fullColumn3Win(gameBoard);

	if (
		cross === 'x' ||
		row1 === 'x' ||
		row2 === 'x' ||
		row3 === 'x' ||
		column1 === 'x' ||
		column2 === 'x' ||
		column3 === 'x'
	)
		return 'x';

	if (
		cross === 'o' ||
		row1 === 'o' ||
		row2 === 'o' ||
		row3 === 'o' ||
		column1 === 'o' ||
		column2 === 'o' ||
		column3 === 'o'
	)
		return 'o';

	if (tie === 'tie') return 'tie';
};

const crossWin = ({ aa, ac, bb, cc, ca }: any): string | undefined => {
	if (aa === 'x' && bb === 'x' && cc === 'x') return 'x';
	if (aa === 'o' && bb === 'o' && cc === 'o') return 'o';
	if (ca === 'x' && bb === 'x' && ac === 'x') return 'x';
	if (ca === 'o' && bb === 'o' && ac === 'o') return 'o';
};

const fullRow1Win = ({ aa, ab, ac }: any): string | undefined => {
	if (aa === 'x' && ab === 'x' && ac === 'x') return 'x';
	if (aa === 'o' && ab === 'o' && ac === 'o') return 'o';
};

const fullRow2Win = ({ ba, bb, bc }: any): string | undefined => {
	if (ba === 'x' && bb === 'x' && bc === 'x') return 'x';
	if (ba === 'o' && bb === 'o' && bc === 'o') return 'o';
};

const fullRow3Win = ({ ca, cb, cc }: any): string | undefined => {
	if (ca === 'x' && cb === 'x' && cc === 'x') return 'x';
	if (ca === 'o' && cb === 'o' && cc === 'o') return 'o';
};

const fullColumn1Win = ({ aa, ba, ca }: any): string | undefined => {
	if (aa === 'x' && ba === 'x' && ca === 'x') return 'x';
	if (aa === 'o' && ba === 'o' && ca === 'o') return 'o';
};

const fullColumn2Win = ({ ab, bb, cb }: any): string | undefined => {
	if (ab === 'x' && bb === 'x' && cb === 'x') return 'x';
	if (ab === 'o' && bb === 'o' && cb === 'o') return 'o';
};

const fullColumn3Win = ({ ac, bc, cc }: any): string | undefined => {
	if (ac === 'x' && bc === 'x' && cc === 'x') return 'x';
	if (ac === 'o' && bc === 'o' && cc === 'o') return 'o';
};

const checkForTie = (board: {}): string | undefined => {
	const boardStringLength = JSON.stringify(board).toString();

	if (boardStringLength.length === 82) return 'tie';
	return '';
};
