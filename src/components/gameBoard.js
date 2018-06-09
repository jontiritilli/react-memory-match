import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setTimeout } from 'timers';

import Card from './card';
import { generateCards, checkPair } from '../actions';

import '../assets/css/app.css';

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    setTimeout(this.props.generateCards, 250);
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.secondCardClicked)
		if (nextProps.secondCardClicked !== null) {
      this.props.checkPair();
		}
  }
  render(){
    let cards = this.props.cardImages.map((card, idx)=> {
      return <Card key={idx} index={idx} cardImage={card}/>
    })
    return (
      <div className='gameContainer'>
        <div className={'gridContainer'+ (this.props.cardImages[0] ? ' show' : '')}>{cards}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		cardImages: state.game.cardImages,
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked,
		noMatch: state.game.noMatch
  };
}
export default connect(mapStateToProps, { generateCards, checkPair })(GameBoard);