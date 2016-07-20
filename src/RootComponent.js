import React from 'react';
import {IndexRedirect, IndexRoute, Route, Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
//import routes from './routes';
import {Container} from 'stardust'
const history = useRouterHistory(createHashHistory)({queryKey: false});
import {Main, App, Home, About, NotFound, StyleScoping, SurveyView, NewSurveyView} from './containers';

/* eslint-disable react/prefer-stateless-function  */
export default class RootComponent extends React.Component {
  render() {
    return (
      <Container className="fluid"><Router history={history}>
        <Route path="/" component={App}>
          <IndexRedirect to="/list_survey"/>
          <Route path="/list_survey" component={Main}>
            <IndexRoute component={SurveyView}/>
            <Route path="/lib" component={Home}/>
            <Route path="/solution" component={StyleScoping}/>
          </Route>
          /*<Route path="*" component={NotFound}/>*/

          <Route path="/new/survey" component={NewSurveyView}/>
        </Route>
      </Router></Container>
    );
  }
}
