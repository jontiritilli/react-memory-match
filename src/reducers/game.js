import types from '../actions/types';
import { generateCards, checkPair, revealCard, concealCards } from '../gameActions';

const DEFAULT_STATE = {
	cardCount: 0,
	matchesCount: 0,
	cardImages: [],
	gameBoardCheck: [],
	firstCardClicked: null,
	secondCardClicked: null,
	canBeClicked: true,
	noMatch: false,
	gamePlayCount: 0,
	tryCount: 0,
	accuracy: 100
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GENERATE_CARDS:
			return {
				...state,
				cardImages: generateCards(),
				cardCount: 18,
				gameBoardCheck: new Array(18).fill(false)
			};
		case types.REVEAL_CARD:
			return revealCard(state, action.payload);

		case types.CHECK_PAIR:
			return checkPair(state);

		case types.CONCEAL_CARDS:
			return concealCards(state);

		case types.RESET_GAME:
			let { gamePlayCount } = state;
			return {
				...state,
				cardCount: 18,
				matchesCount: 0,
				cardImages: [],
				gameBoardCheck: new Array(18).fill(false),
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true,
				noMatch: false,
				gamePlayCount: gamePlayCount + 1,
				tryCount: 0,
				accuracy: 100
			};

		default:
			return state;
	}
}