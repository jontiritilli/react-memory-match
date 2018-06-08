import React, {Component} from 'react';
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './header';
import GameBoard from './gameBoard';

import '../assets/css/app.css';

class PlayPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      boardState: null
    }
  }
	componentWillReceiveProps(nextProps) {
		if (nextProps.numberOfMatches === nextProps.numberOfCards / 2 && nextProps.numberOfCards !== 0) {
			this.setState({
				gameAreaState: (
					<CSSTransition key="win-modal" classNames="modal" timeout={500}>
						<WinModal closeModal={this.closeModal} />
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
        <GameBoard key={this.props.gamesPlayed}/>
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

export default connect(mapStateToProps, {})(PlayPage);