/**
 * Created by fechow on 7/14/16.
 */

import _ from 'lodash'
import React, {Component, PropTypes, Children} from 'react'
import {Table, Button, Segment} from 'stardust'
import cx from 'classnames'
import SurveyItemCard from './SurveyItemCard'

export  default class SurveyTable extends Table {

  static propTypes = {
    totalRows: PropTypes.number

  }

  constructor(props, context) {
    super(props, context);
    this.columnSize = this.props.children.length;
    this.perPage = this.props.data.length || 5;
    this.totalRows = this.props.totalRows || 0;
    this.pageNumber = this.props.pageNumber || ( Number.parseInt(this.totalRows / this.perPage) + 1);
    this.pagination = (this.pageNumber > 1) ? true : false;
  }

  // _getHeaders() {
  //   console.log(this.props.data.length);
  //   return null;
  // }

  _getFooter() {

    if (!this.pagination) {
      return null;
    }


    return (
      <tfoot>
      <tr>
        <th colSpan={this.columnSize}>
          <div className="ui right floated pagination menu">

            <a className="icon item">
              <i className="left chevron icon"></i>
            </a>
            {this._getFooterCells()}
            <a className="icon item">
              <i className="right chevron icon"></i>
            </a>
          </div>
        </th>
      </tr>
      </tfoot>
    );
  }

  _getCells(dataItem, rowIndex) {

    return Children.map(this.props.children, (column) => {
      let content
      if (column.props.cellRenderer) {
        content = column.props.cellRenderer(dataItem)
      } else {
        const itemContents = dataItem[column.props.dataKey]
        content = Table.getSafeCellContents(itemContents)
      }

      return <td key={rowIndex + column.props.dataKey}>{content}</td>
    })
  }


  _getFooterCells() {
    return _.range(1, this.pageNumber + 1).map((index) => {
      return <a className="item">{index}</a>;
    });

  }

  render() {
    const {onSelectRow, onSortChange, defaultSelectedRows} = this.props
    const classes = cx(
      'ui',
      {selectable: !!onSelectRow || !!defaultSelectedRows},
      {sortable: !!onSortChange},
      this.props.className,
      'table'
    )
    return (
      <table {...this.props} className={classes}>
        <thead>
        <tr>
          {this._getHeaders()}
        </tr>
        </thead>
        <tbody>
        {this._getRows()}
        </tbody>
        {this._getFooter()}
      </table>
    )
  }
}