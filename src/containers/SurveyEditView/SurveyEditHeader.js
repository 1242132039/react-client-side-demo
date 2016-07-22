/**
 * Created by fechow on 7/22/16.
 */

import React, {Component} from 'react'

export default class SurveyEditHeader extends Component {

  render() {

    return (
      <Menu className="inverted attached stackable big">
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


        </div>

      </Menu>

    );
  }
}
