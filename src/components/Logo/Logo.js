/**
 * Created by fechow on 7/12/16.
 */

import React, {Component, PropTypes} from 'react';

import {Image, Label} from 'stardust'
import {Link} from 'react-router'
//import logoUrl from 'http://semantic-ui.com/images/logo.png'


export default class Logo extends Component {

  render() {

    return (
      <Link className="item" to="/">
        <Image src="http://semantic-ui.com/images/logo.png" width="100" height="44"></Image>
      </Link>
    );
  }
}

