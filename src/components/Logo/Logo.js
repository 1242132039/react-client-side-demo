/**
 * Created by fechow on 7/12/16.
 */

import React, {Component, PropTypes} from 'react';

import {Image, Label} from 'stardust'
import {Link} from 'react-router'

class Logo extends Component {

  render() {

    return (
      <Link className="ui header item" to="/">
        <img src="https://avatars0.githubusercontent.com/u/17830871" width="100" height="100">
        </img>
        FeCHOW
      </Link>
    );
  }


}

export  default Logo;