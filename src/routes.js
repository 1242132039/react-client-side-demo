import React from 'react';
import {IndexRedirect, IndexRoute, Route} from 'react-router';
import {Main, App, Home, About, NotFound, StyleScoping, SurveyView, NewSurveyView, SurveyEditView} from './containers';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/list_survey"/>
    <Route path="/list_survey" component={Main}>
      <IndexRoute component={SurveyView}/>
      <Route path="/lib" component={Home}/>
      <Route path="/solution" component={StyleScoping}/>
    </Route>
    <Route path="/survey/new" component={SurveyEditView}/>
  </Route>
);
