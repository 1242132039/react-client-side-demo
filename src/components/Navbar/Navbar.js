import s from './Navbar.styl';
import React, {Component} from 'react';
import cx from 'classnames';
import {Link} from 'react-router'
import {Dropdown, Container, Menu, Menuitem, Icon} from 'stardust'
import  Logo from '../Logo'

export default class Navbar extends Component {


  color() {
    return {
      //backgroundColor: '#0067AC',
      padding: 5
    };
  }

  render() {

//
    console.log("berk", s.navbar);
    return (
      <Menu className="inverted stackable big">

        <Container style={this.color()}>
          <div className="left menu">
            <Logo className="item"/>
          </div>

          <Link className="item" to="/">Home</Link>
          <Link className="item" to="mysurvey">My Survey</Link>
          <Link className="item" to="styles">Style framework</Link>

          <div className="right menu">
            <Link className="ui item" to="blog"><Icon className="mail"></Icon></Link>
            <Dropdown></Dropdown>
            <Link className="ui item" to="blog">Admin</Link>
          </div>
        </Container>
      </Menu>
    );

  }

}

