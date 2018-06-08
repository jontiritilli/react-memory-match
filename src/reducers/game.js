import types from '../actions/types';
import { createCards, revealCard, checkPair, concealCards } from '../gameActions/index';

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
	accuracy: '---'
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.SELECT_CARDPACK:
			return {
				...state,
				cardPack: action.payload,
				attempts: 0,
				accuracy: '---',
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true
			};
		case types.CREATE_CARDS:
			return {
				...state,
				cardImages: createCards(),
				cardCount: 18,
				gameBoardCheck: new Array(18).fill(false)
			};
		case types.REVEAL_CARD:
			return revealCard(state, action.payload);

		case types.CHECK_PAIR:
			return checkPair(state);

		case types.REVERT_CARDS:
			return concealCards(state);

		case types.RESET_GAME:
			let { gamesPlayed, matchesCount, cardCount } = state;

			return {
				...state,
				cardCount: 18,
				matchCount: 0,
				cardImages: [],
				gameBoardCheck: new Array(18).fill(false),
				firstCardClicked: null,
				secondCardClicked: null,
				canBeClicked: true,
				isMatch: false,
				gamePlayCount: gamePlayCount + 1,
				tryCount: 0,
				accuracy: '---'
			};

		default:
			return state;
	}
}