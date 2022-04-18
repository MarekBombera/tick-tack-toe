import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { setGameMode, setPickedMark } from '../../actions';

import {
	StartMenuStyled,
	Input,
	Slider,
	Mark,
} from '../styles/StartMenu.styled';
import { Logo, Img } from '../styles/Header.styled';
import {
	PickMarkerWrap,
	PickMarker,
	MarkerX,
	MarkerO,
	Button,
} from '../styles/StartMenu.styled';

import icon_o from '../../assets/icon-o.svg';
import icon_x from '../../assets/icon-x.svg';

export const StartMenu = (): JSX.Element => {
	const { pickedMarkReducer } = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	const toggleMarks = (): void => {
		dispatch(setPickedMark(!pickedMarkReducer));
	};

	const dispatchNewGameCPU = (): void => {
		dispatch(setGameMode('cpu'));
	};

	const dispatchNewGameMulti = (): void => {
		dispatch(setGameMode('multi'));
	};

	return (
		<StartMenuStyled>
			<Logo justifySelf={'center'}>
				<Img src={icon_x} alt="" />
				<Img src={icon_o} alt="" />
			</Logo>
			<PickMarkerWrap>
				<h4>pick player 1's mark</h4>
				<PickMarker>
					<Input onClick={() => toggleMarks()} />
					<Slider>
						<MarkerX>
							<Mark src={icon_x} alt="" pickedMark={pickedMarkReducer} />
						</MarkerX>
						<MarkerO>
							<Mark src={icon_o} alt="" pickedMark={!pickedMarkReducer} />
						</MarkerO>
					</Slider>
				</PickMarker>
				<p>remember: x goes first</p>
			</PickMarkerWrap>
			<Button color={'var(--yellow)'} onClick={() => dispatchNewGameCPU()}>
				new game (vs cpu)
			</Button>
			<Button
				color={'var(--green-blue)'}
				onClick={() => dispatchNewGameMulti()}
			>
				new game (vs player)
			</Button>
		</StartMenuStyled>
	);
};
