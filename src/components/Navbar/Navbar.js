import s from './Navbar.styl';
import React, {Component} from 'react';
import cx from 'classnames';
import {Link} from 'react-router'
import {Dropdown, Container, Menu, Menuitem, Icon} from 'stardust'
import  Logo from '../Logo'
import AccoutDropdown from '../../containers/Account/AccountDropdown'


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

          <Link className="item" to="/list_survey">My Survey</Link>

          <Link className="item" to="/lib">Template Repos</Link>

          <Link className="item" to="/solution">Solution</Link>

          <div className="right menu">
            <Link className="ui item" to="blog"><Icon className="mail"></Icon></Link>

            <div className="ui item"><AccoutDropdown></AccoutDropdown></div>
          </div>
        </Container>
      </Menu>
    );

  }

}

