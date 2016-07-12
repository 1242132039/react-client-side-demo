import styles from './Navbar.styl';
import React, {Component} from 'react';

import {Link} from 'react-router'
import {Button, Menu, Menuitem} from 'stardust'
import  Logo from '../Logo'

class Navbar extends Component {

  render() {

    return (<div className={styles.navbar}>
      <Menu className="ui five item menu">
        <Logo/>
        <Link className="item"  to="/">Home</Link>
        <Link className="item" to="mysurvey">My Survey</Link>
        <Link className="item" to="styles">Style framework</Link>
        <span >  </span>
        <Link className="item" to="blog">Login Out</Link>
      </Menu>
    </div>);

  }

}

export default Navbar;
