import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GameBoard from './gameBoard';
import ScoreBoard from './scoreBoard';
import { generateCards, checkPair } from '../actions';

import '../assets/css/app.css';

class PlayPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      boardState: null
    }
  }
	componentWillReceiveProps(nextProps) {
		if (nextProps.matchCount === nextProps.cardCount / 2 && nextProps.cardCount !== 0) {
			this.setState({
				gameAreaState: (
					<CSSTransition key="win-modal" classNames="modal" timeout={500}>
						<WinModal closeModal={this.modalClose} />
					</CSSTransition>
				)
			});
		} else {
			this.setState({
				gameAreaState: null
			});
		}
	}

  modalOpen(){
		this.setState({
			gameAreaState: (
				<CSSTransition key="settings-modal" classNames="modal" timeout={500}>
					<Settings closeModal={this.closeModal} redirectPage={this.redirectPage} />
				</CSSTransition>
			)
		});
  }
  modalClose(){
		this.setState({
			gameAreaState: null
		});
  }
  render(){
    return(
      <div className="mainContainer">
        <Header/>
        <GameBoard key={this.props.gamePlayCount}/>
        <ScoreBoard/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    matchCount: state.game.matchCount,
    cardCount: state.game.cardCount,
    gamePlayCount: state.game.gamePlayCount
  }
}

export default connect(mapStateToProps, { generateCards, checkPair })(PlayPage);