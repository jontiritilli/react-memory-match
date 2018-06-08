import React, {Component} from 'react';
import { connect } from 'react-redux';
import { generateCards, checkPair } from '../actions';

import Card from './card';

import '../assets/css/app.css';
import { setTimeout } from 'timers';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    setTimeout(generateCards, 250);
  }

  componentWillReceiveProps(){
		if (nextProps.secondCardClicked !== null) {
			checkPair();
		}
  }

  render(){
    let cards = this.props.cardImages.map((card, idx)=> {
      return <Card key={idx} cardImage={card}/>
    })
    return (
      <div className="gameContainer">
        gameArea
        <div>{cards}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		cardFronts: state.game.cardFronts,
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked,
		cardPack: state.game.cardPack
  };
}
export default connect(mapStateToProps, {})(GameBoard);