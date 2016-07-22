/**
 * Created by fechow on 7/13/16.
 */


import  React, {Component} from 'react'


export  default class SurveyTableView extends Component {

  render() {

    return (

      <table className="ui celled table">

        <tbody>
        <tr>
          <td>
            <div className="ui ribbon label">First</div>
          </td>
        </tr>
        <tr>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th colSpan="1">
            <div className="ui right floated pagination menu">
              <a className="icon item">
                <i className="left chevron icon"></i>
              </a>
              <a className="item">1</a>
              <a className="item">2</a>
              <a className="item">3</a>
              <a className="item">4</a>
              <a className="icon item">
                <i className="right chevron icon"></i>
              </a>
            </div>
          </th>
        </tr>
        </tfoot>
      </table>

    );


  }

}

