import cardImages from '../cardData';

export const generateCards = () => {
	let ogCardImages = cardImages.slice();
	let holderArray = [];
  let randomSelectionArray = [];

	for (let selector = 0; selector < 9; selector++) {
		let randomIndex = Math.floor(Math.random() * ogCardImages.length);
		holderArray.push(ogCardImages[randomIndex]);
		ogCardImages.splice(randomIndex, 1);
	}

	for (let index = 0; index < holderArray.length; index++) {
		randomSelectionArray.push(holderArray[index]);
		randomSelectionArray.push(holderArray[index]);
	}

	holderArray = randomSelectionArray;
	randomSelectionArray = [];
	while (holderArray.length > 0) {
		var randomIndex = Math.floor(Math.random() * holderArray.length);
		randomSelectionArray.push(holderArray[randomIndex]);
		holderArray.splice(randomIndex, 1);
	}

	return randomSelectionArray;
};

export const revealCard = (state, payload) => {
	let { firstCardClicked, secondCardClicked, gameBoardCheck, canBeClicked } = state;
	const { cardIndex: idx } = payload;
	if (gameBoardCheck[idx] || firstCardClicked === payload || !canBeClicked) {
		return state;
	}

	if (!firstCardClicked) {
		firstCardClicked = payload;
    gameBoardCheck[idx] = true;

		return {
      ...state,
			firstCardClicked,
			gameBoardCheck
		};
	}

  secondCardClicked = payload;
  gameBoardCheck[idx] = true;

	return {
		...state,
		secondCardClicked,
		gameBoardCheck,
		canBeClicked: false
	};
};

export const checkPair = (state) => {
	let {
		tryCount,
		accuracy,
		matchesCount,
		cardCount,
		firstCardClicked,
    secondCardClicked
	} = state;

	tryCount++;
	if (firstCardClicked.cardImage === secondCardClicked.cardImage) {
		matchesCount++;
    accuracy = accuracyCalc(matchesCount, tryCount);
//check win scenario and return appropriate action
		if (matchesCount === cardCount / 2) {
			return {
				...state,
				tryCount,
				matchesCount,
				accuracy
			};
    }
    //found match, no win, dispatch updated state
		return {
			...state,
			firstCardClicked: null,
			secondCardClicked: null,
			tryCount,
			accuracy,
			matchesCount,
			canBeClicked: true
		};
	}
//no win, dispatch updated state
	accuracy = accuracyCalc(matchesCount, tryCount);
	return {
		...state,
		tryCount,
		accuracy,
		noMatch: true
	};
};

export const accuracyCalc = (matchesCount, tryCount) => ((matchesCount/tryCount)*100).toFixed(1);

export const concealCards = (state) => {
	let { firstCardClicked, secondCardClicked, gameBoardCheck } = state;
	if (firstCardClicked === null) {
		return state;
	}
	gameBoardCheck[firstCardClicked.cardIndex] = false;
	gameBoardCheck[secondCardClicked.cardIndex] = false;
	return {
		...state,
		firstCardClicked: null,
		secondCardClicked: null,
		gameBoardCheck,
		canBeClicked: true,
		noMatch: false
  };
};