import React from 'react';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

/* eslint-disable react/prefer-stateless-function  */
export default class RootComponent extends React.Component {
  render() {
    return (
      <div className="ui container" ><Router routes={routes} history={history} /></div>
    );
  }
}
