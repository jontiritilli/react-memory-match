import React, {Component} from 'react';
import {connect} from 'react-redux';
import {revealCard, concealCards} from '../actions';

import cardBack from '../assets/images/card-back.png';

class Card extends Component {
  constructor(props){
    super(props);
  }
	componentWillReceiveProps(nextProps) {
		if (nextProps.noMatch) {
			this.resetCards = setTimeout(this.props.concealCards, 1000);
		}
	}
	cardClicked() {
    this.props.revealCard(this.props.cardImage, this.props.index);
    console.log(this.props.gameBoardCheck)
  }
  render(){
		let backStyle = {
			display: ''
		};
		if (this.props.gameBoardCheck[this.props.index]) {
			backStyle.display = 'none';
    }
    return (
			<div className='card' onClick={this.cardClicked.bind(this)}>
        <img className='back' style={backStyle} src={cardBack}/>
        <img className='front' src={this.props.cardImage} />
			</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		gameBoardCheck: state.game.gameBoardCheck,
		firstCardClicked: state.game.firstCardClicked,
		secondCardClicked: state.game.secondCardClicked,
		noMatch: state.game.noMatch
	};
}

export default connect(mapStateToProps, {revealCard, concealCards})(Card);