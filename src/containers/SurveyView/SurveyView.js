/**
 * Created by fechow on 7/13/16.
 */

import _ from 'lodash'
import faker from 'faker'
import React, {Component} from 'react'
import {Table, Button, Segment} from 'stardust'
import {Link} from 'react-router'
import  SurveyTableView from './SurveyTableView'
import SurveySearchView from './SurveySearchView'
const data = _.times(20, n => ({
  name: faker.name.findName(),
  phone: faker.phone.phoneNumber(),
  state: faker.address.state(),
}))


class SurveyView extends Component {
  state = {};


  handleSelectRow = (item, index) => {
    this.setState({
      selectedItem: JSON.stringify(item, null, 2),
      selectedIndex: index,
    })
  };

  render() {
    const {selectedItem, selectedIndex} = this.state
    return (
      <div>
        <div >
          <Link className="ui teal button " to="newsurvey"> <i className="icon add"></i> New Survey </Link>

          <SurveySearchView></SurveySearchView>

        </div>

        <SurveyTableView></SurveyTableView>

        <Table name="aaaaaa" className='selectable celled' data={data} onSelectRow={this.handleSelectRow}>
          <Table.Column dataKey='name'/>
          <Table.Column dataKey='phone'/>
          <Table.Column dataKey='state'/>
        </Table>
        <div className="ui secondary segment">
          <div className="ui header ">Selected:</div>
          <pre>Index: {selectedIndex}{'\n'}Item: {selectedItem}</pre>
        </div>
      </div>
    )
  }
}


export  default SurveyView;
