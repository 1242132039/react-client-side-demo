import React from 'react';
import {IndexRedirect, IndexRoute, Route, Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import routes from './routes';
import {Container} from 'stardust'
const history = useRouterHistory(createHashHistory)({queryKey: false});
import {Main, App, Home, About, NotFound, StyleScoping, SurveyView, NewSurveyView} from './containers';

/* eslint-disable react/prefer-stateless-function  */
export default class RootComponent extends React.Component {
  render() {
    return (
      <Container className="fluid"><Router routes={routes} history={history}>

      </Router></Container>
    );
  }
}
