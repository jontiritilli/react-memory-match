import React, {Component} from 'react';
import {connect} from 'react-redux';
import {revealCard, concealCards} from '../actions';

import cardBack from '../assets/images/card-back.png';

class Card extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.noMatch) {
			this.resetCards = setTimeout(this.props.concealCards, 1000);
		}
	}
	cardClicked() {
		revealCard(this.props.cardImage, this.props.idx);
  }
  render(){
    let backStyle = {
      display: ''
    };
    return (
			<div className="card" onClick={this.cardClicked.bind(this)}>
				<div className="back" style={backStyle}>
					<img src={cardBack} />
				</div>
				<div className="front">
					<img src={this.props.cardImage} />
				</div>
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