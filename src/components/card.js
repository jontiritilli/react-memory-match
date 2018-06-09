import React, {Component} from 'react';
import {connect} from 'react-redux';
import {revealCard, concealCards} from '../actions';

import cardBack from '../assets/images/card-back.png';

class Card extends Component {
  constructor(props){
    super(props);
  }
	componentWillReceiveProps(nextProps) {
    console.log('no match before check ' + nextProps.noMatch)
		if (nextProps.noMatch) {
      console.log('nomatch in check ' + nextProps.noMatch)
			this.resetCards = setTimeout(this.props.concealCards, 750);
		}
	}
	cardClicked() {
    this.props.revealCard(this.props.cardImage, this.props.index);
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