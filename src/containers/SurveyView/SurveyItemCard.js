/**
 * Created by fechow on 7/16/16.
 */

import React, {Component} from 'react'
import {TableColumn, Icon}from 'stardust'

export default class SurveyItemCard extends Component {

  // static defaultProps = {
  //   cellRenderer: this._cellRenderer
  //
  // }
  _onMouseOver() {

  }

  _onMouseOut() {

  }

  render() {
    return <div className="ui item">{JSON.stringify({})}</div>
  }

  render1() {
    return <td className="ui item">

      <div className="content">
        <a className="header">12 Years a Slave</a>
        <div className="meta">
          <span className="cinema">Union Square 14</span>
        </div>
        <div className="description">
          <p>sfsdfsdfffffffffffffffffffffff</p>
        </div>
        <div className="extra">
          <div className="ui label">IMAX</div>
          <div className="ui label"><Icon class="globe icon"></Icon> Additional Languages</div>
          <div className="ui right floated primary button">
            Buy tickets
            <Icon className="right chevron icon"></Icon>
          </div>
        </div>
      </div>
    </td>
  }

}
