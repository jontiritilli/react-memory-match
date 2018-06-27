import React from 'react';
import {connect} from 'react-redux';

class ScoreBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="statsContainer">
        <div className="accuracy">
          <div className="statName">Accuracy</div>
          <div className="stats">{this.props.accuracy}%</div>
        </div>
        <div className="gamePlayCount">
          <div className="statName">Play Count</div>
          <div className="stats">{this.props.playCount}</div>
        </div>
        <div className="Attempts">
          <div className="statName">Attempts</div>
          <div className="stats">{this.props.attempts}</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    tryCount: state.game.tryCount,
    gameCount: state.game.gamePlayCount,
    accuracy: state.game.accuracy
  }
}
 export default connect(mapStateToProps, {})(ScoreBoard);