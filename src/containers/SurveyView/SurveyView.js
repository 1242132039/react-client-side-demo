/**
 * Created by fechow on 7/13/16.
 */

import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Table, Segment } from 'stardust'


const data = _.times(5, n => ({
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
    const { selectedItem, selectedIndex } = this.state
    return (
      <div>
        <Table name="aaaaaa" className='selectable' data={data} onSelectRow={this.handleSelectRow}>
          <Table.Column dataKey='name' />
          <Table.Column dataKey='phone' />
          <Table.Column dataKey='state' />
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
