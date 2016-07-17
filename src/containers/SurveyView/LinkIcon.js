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
    (this.props.popup) && $('.popup.icon').popup(
      {
        lastResort: 'bottom left',
        inline: false,
        bottom:'1px',
        top:'1px',
      }
    );

  }

  render() {

    let className = cx(this.props.disabled ? "disabled black" : "", 'large', this.props.icon, (!this.props.disabled ) && this.props.popup && "popup");
    let onclick = e => e.preventDefault();
    let popText = this.props.disabled ? "" : this.props.popup;
    return <Link {...this.props} onClick={this.props.disabled&&onclick}> <Icon className={className}
                                                                               title={popText}></Icon>
    </Link>

  }
}
