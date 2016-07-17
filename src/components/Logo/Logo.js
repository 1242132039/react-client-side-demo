/**
 * Created by fechow on 7/12/16.
 */

import React, {Component, PropTypes} from 'react';

import {Image, Label} from 'stardust'
import {Link} from 'react-router'
import logoUrl from './logo-small.png'


class Logo extends Component {

  render() {

    return (
      <Link className="ui header" to="/">
        <img src={logoUrl} width="100" height="100" alt="FECHOW"/>
      </Link>
    );
  }


}

export  default Logo;