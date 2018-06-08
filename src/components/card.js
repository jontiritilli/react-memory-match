import React, {Component} from 'react';
import {connect} from 'react-redux';
import {revealCard, concealCards} from '../gameActions/index';

class Card extends Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.noMatch) {
			this.resetCards = setTimeout(this.props.revertCards, 1000);
		}
	}

	cardClicked() {
		revealCard(this.props.cardFront, this.props.index);
  }

  render(){
    let backStyle = {
      display: ''
    };

    return (
			<div className="card" onClick={this.cardClicked.bind(this)}>
				<div className="back" style={backStyle}>
					<img src={this.props.cardPack} />
				</div>
				<div className="front">
					<img src={this.props.cardFront} />
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