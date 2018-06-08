import types from './types';

export function generateCards() {
	return {
		type: types.GENERATE_CARDS,
	};
}

export function revealCard(cardImage, cardIndex) {
	return {
		type: types.REVEAL_CARD,
		payload: {
			cardImage,
			cardIndex
		}
	};
}

export function concealCards() {
	return {
		type: types.CONCEAL_CARDS
	};
}

export function checkPair() {
	return {
		type: types.CHECK_PAIR
	};
}

export function resetGame() {
	return {
		type: types.RESET_GAME
	};
}