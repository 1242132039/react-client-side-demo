import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, About, NotFound, StyleScoping, SurveyView ,NewSurveyView} from './containers';

export default (
  <Route path="/" component={App}>
    { /* main route */ }
    <IndexRoute component={Home} />

    { /* routes */ }
    <Route path="mysurvey" component={SurveyView} />
    <Route path="styles" component={StyleScoping} />
    <Route path="newsurvey" component ={NewSurveyView} />
    { /* catch all route */ }
    <Route path="*" component={NotFound} />
  </Route>
);
