/**
 * Created by fechow on 7/13/16.
 */

import _ from 'lodash'
import faker from 'faker'
import React, {Component} from 'react'

import {Table, Select, Button, Menu, Icon, Input, Container} from 'stardust'

import {Link} from 'react-router'
import  SurveyTableView from './SurveyTableView'
import Search from './Search'
import  SurveyTable from './SurveyTable'
import SurveyItemCard from './SurveyItemCard'

import LinkIcon from './LinkIcon'


import projects from '../../assest/list_project.json'

const data = _.times(3, n => ({
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


  _projectTypeCellRendderer(dataItem) {
    let type = dataItem.p_type;
    if (type === 1) {
      return "调查"
    }
    return "问卷";
  }


  _projectStateCellRendderer(dataItem) {
    let states = [{value: "0", text: "未发布"}, {value: "1", text: "收集中"}, {value: "2", text: "已停止"}];
    let initState = dataItem.status;
    return <Select focus defaultValue={states[initState].value} options={states}></Select>


  }

  _operationCellRendderer1(dataItem) {
    return <Link onClick={e => e.preventDefault()} to=""><Icon className="disabled black line chart"></Icon></Link>
  }

  _operationCellRendderer(dataItem) {
    const popupText = this._projectTypeCellRendderer(dataItem);
    let disabledIcon = (dataItem.status == 2);
    return <div className="ui stackable five column grid">
      <LinkIcon to="newsurvey" popup={"编辑" + popupText} icon="edit" disabled={disabledIcon}></LinkIcon>
      <LinkIcon to="newsurvey" popup={popupText + "分析"} icon="line chart" disabled={dataItem.status == 0}></LinkIcon>
      <LinkIcon to="newsurvey" popup={"复制"+ popupText} icon="clone" disabled={false}></LinkIcon>
      <Link to="project/overview">预览</Link>
      <LinkIcon to="newsurvey" popup={"删除"+ popupText} icon="trash" disabled={false}></LinkIcon>
    </div>
  }


  handleTitileSearch(e, value) {

    console.log($("#project_seach_key"));
    console.log(e);
    alert($("#project_seach_key").val());
  }

  render() {

    const {selectedItem, selectedIndex} = this.state
    return (
      <div className="ui  container">

        <div className="ui secondary menu">
          <div className="left item">
            <Link className="ui left primary button " to="/survey/new"> <Icon
              className="add"></Icon>新建</Link>

          </div>

          <div className="right item">
            <div className="ui right assigned input">
              <Input name="project_seach_key" id="project_seach_key" className='right icon action'
                     placeholder='input survey name...'>
                <Button className="primary icon" onClick={this.handleTitileSearch.bind(this)}><Icon
                  className="search"></Icon></Button>
              </Input>
            </div>
          </div>
        </div>
        <SurveyTable className='selectable celled' data={projects.project_list} totalRows={projects.totalPage*5}
                     onSelectRow={this.handleSelectRow}>
          <Table.Column dataKey='title' headerRenderer={()=> "标题"}></Table.Column>
          <Table.Column dataKey='p_type' headerRenderer={()=> "类型"}
                        cellRenderer={this._projectTypeCellRendderer}></Table.Column>
          <Table.Column dataKey='status' headerRenderer={()=> "状态"}
                        cellRenderer={this._projectStateCellRendderer.bind(this)}></Table.Column>
          <Table.Column dataKey='rspd_count' headerRenderer={()=> "回收数量"}></Table.Column>
          <Table.Column dataKey="created_time" headerRenderer={()=> "创建时间"}></Table.Column>
          <Table.Column dataKey='time_diff_display' headerRenderer={()=> "编辑时间"}></Table.Column>
          <Table.Column headerRenderer={()=> "操作"}
                        cellRenderer={this._operationCellRendderer.bind(this)}></Table.Column>
        </SurveyTable>
        <div className="ui secondary segment">
          <div className="ui header ">Selected:</div>
          <pre>Index: {selectedIndex}{'\n'}Item: {selectedItem}</pre>
        </div>
      </div>
    )
  }
}


export default SurveyView;
