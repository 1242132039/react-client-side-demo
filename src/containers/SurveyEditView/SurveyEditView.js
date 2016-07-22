/**
 * Created by fechow on 7/22/16.
 */

import React, {Component, PropTypes} from 'react';
import {Footer, Header, Navbar} from '../../components';
import {Divider} from 'stardust'

export default class SurveyEditView extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    console.log("berk ,survey edit view.");
    return (
      <section id="application">
        <div >
          <Navbar />
          <Divider className="hidden"></Divider>
          <div >
            {this.props.children}
          </div>
        </div>
      </section> );

  }
}
