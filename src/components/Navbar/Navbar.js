import s from './Navbar.styl';
import React, {Component} from 'react';
import cx from 'classnames';
import {Link} from 'react-router'
import {Dropdown, Container, Menu, Menuitem, Icon} from 'stardust'
import  Logo from '../Logo'
import AccoutDropdown from '../../containers/Account/AccountDropdown'


export default class Navbar extends Component {


  render() {
    return (
      <Menu className=" inverted attached stackable big">
        <div className="left menu">
          <Logo className="item"/>
        </div>

        <Container >

          <Link className="centered  item" to="/list_survey">My Survey</Link>

          <Link className="item" to="/lib">Template Repos</Link>

          <Link className="item" to="/solution">Solution</Link>

        </Container>
        <div className="right menu">
          <Link className="ui item" to="blog"><Icon className="mail"></Icon></Link>

          <div className="ui item"><AccoutDropdown></AccoutDropdown></div>
        </div>

      </Menu>
    );

  }

}

