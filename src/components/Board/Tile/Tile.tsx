import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducers/';
import { changeTurn } from '../../../actions/';

import { dispatchClickedTile } from '../../../utils/dispatchClickedTile';
import { toggleNotClickable } from '../../../utils/toggleNotClickable';
import { TileContainer, Img } from '../../styles/Tile.styled';

import icon_o from '../../../assets/icon-o.svg';
import icon_x from '../../../assets/icon-x.svg';
import icon_o_outlined from '../../../assets/icon-o-outline.svg';
import icon_x_outlined from '../../../assets/icon-x-outline.svg';

type props = {
	tileId: string;
};

export const Tile = ({ tileId }: props): JSX.Element => {
	const [XO, setXO] = useState<string>('');
	const [hoverXO, setHoverXO] = useState<string>('');
	const { boardReducer, turnReducer, notClickableReducer } = useSelector(
		(state: RootState) => state
	);
	const dispatch = useDispatch();

	const handleAddingXO = useCallback((): void => {
		const boardReducerEntries = Object.entries(boardReducer);
		for (let i in boardReducerEntries) {
			if (
				boardReducerEntries[i][1] === 'x' &&
				boardReducerEntries[i][0] === tileId
			) {
				setXO(icon_x);
			}
			if (
				boardReducerEntries[i][1] === 'o' &&
				boardReducerEntries[i][0] === tileId
			) {
				setXO(icon_o);
			}
		}
	}, [boardReducer, tileId]);

	const handleMouseEnter = (): void => {
		if (turnReducer === 'x') setHoverXO(icon_x_outlined);
		if (turnReducer === 'o') setHoverXO(icon_o_outlined);
	};

	const handleMouseLeave = (): void => {
		setHoverXO('');
	};

	useEffect(() => {
		if (notClickableReducer) return;

		handleAddingXO();
		if (turnReducer === 'reset') {
			setXO('');
			dispatch(changeTurn('x'));
		}
	}, [handleAddingXO, turnReducer, dispatch, notClickableReducer]);

	useEffect(() => {
		toggleNotClickable(dispatch, notClickableReducer);
	}, []);

	return (
		<TileContainer
			onClick={() =>
				!notClickableReducer
					? dispatchClickedTile(tileId, boardReducer, turnReducer, XO, dispatch)
					: null
			}
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
		>
			<Img src={XO.length === 0 ? hoverXO : XO} alt={XO} />
		</TileContainer>
	);
};
