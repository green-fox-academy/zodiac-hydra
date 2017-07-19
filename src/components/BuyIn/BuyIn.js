/**
 * Created by cw on 2017-07-04.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {enterBuyInChips} from './buyIn_actions'

class BuyInComp extends React.Component {

  changeInput(event) {
    this.props.enterBuyInChips(event.target.value)
  }

  render() {
    return (
      <div>
        <h4 className="chipsHeader">Amount of chips: {this.props.buyInChips}$</h4>
        <input type="range" min="0" max={this.props.userInfo.chips} step='10' onChange={this.changeInput.bind(this)} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo,
    buyInChips: state.buyIn.buyInChips
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({enterBuyInChips: enterBuyInChips}, dispatch)
}

let BuyIn = connect(mapStateToProps, matchDispatchToProps)(BuyInComp);

export default BuyIn;
