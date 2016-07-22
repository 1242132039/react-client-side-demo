/**
 * Created by fechow on 7/16/16.
 */

import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {Icon}from 'stardust'
import cx from 'classnames'

export default class LinkIcon extends Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    disabled: PropTypes.boolean,
    popup: PropTypes.string,
    icon: PropTypes.boolean,
  }

  static defaultProps = {
    disabled: false,
    popup: ""
  }

  componentDidMount() {
    (this.props.popup) && $('[data-content]').popup(
      {
        duration : 0,
        delay    : {
          show : 10,
          hide : 0
        },

        variation : 'inverted',
        position  : 'bottom center',
      }
    );

  }

  render() {

    let className = cx(this.props.disabled ? "disabled black" : "", 'large', this.props.icon);
    let onclick = e => e.preventDefault();
    let popText = this.props.disabled ? "" : this.props.popup;
    return <Link {...this.props} onClick={this.props.disabled&&onclick} data-content={popText}> <Icon className={className}     ></Icon>
    </Link>

  }
}
