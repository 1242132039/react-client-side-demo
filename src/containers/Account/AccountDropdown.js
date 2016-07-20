/**
 * Created by fechow on 7/21/16.
 */

import React, {Component, PropTypes} from 'react'
import {Dropdown, Icon} from 'stardust'
import {Link} from 'react-router'

export default class AccountDropdown extends Component {
  static propTypes = {
    usrname: PropTypes.string
  };


  static defaultProps = {
    username: "Admin"
  };



  render() {
    const style = {
      backgroundColor:'#CCE2FF'
    };
    return (

      <div className="ui compact menu inverted"  style={this.style}>
        <div className="ui simple inverted dropdown  item ">
          <div className="ui icon"><Icon className="user"/>{this.props.username}</div>
          <i className="ui dropdown icon"></i>
          <div className="ui menu" >
            <div className="item blue"><Link className="ui button "  style={this.style} to="member">My Account</Link></div>
            <div className="teal item"><Link className="ui link"  to="member/mywallet">My Wallet</Link></div>
            <div className="item"><Link className="ui black button"  to="member/contract">Contract List</Link></div>
            <div className="ui item inverted"><Link className="ui link" to="logout">Logout</Link></div>
          </div>
        </div>
      </div>




    );

  }
}
