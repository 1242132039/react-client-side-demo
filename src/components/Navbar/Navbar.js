import s from './Navbar.styl';
import React, {Component} from 'react';
import cx from 'classnames';
import {Link} from 'react-router'
import {Button, Menu, Menuitem} from 'stardust'
import  Logo from '../Logo'

export default class Navbar extends Component {


  color() {
    return {
      //backgroundColor: '#0067AC',
    };
  }

  render() {

//
    console.log("berk", s.navbar);
    return (<div className="ui container">
      <Menu className="inverted pointing" style={this.color()}>

        <Link className="header item" to="/">Home</Link>
        <Link className="header item" to="mysurvey">My Survey</Link>
        <Link className="header item" to="styles">Style framework</Link>
        <div className="right menu">
          <Link className="ui item" to="blog">Login Out</Link>
        </div>
      </Menu>
    </div>);

  }

}

