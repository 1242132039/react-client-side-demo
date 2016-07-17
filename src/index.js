import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import RedBox from 'redbox-react';

require('stardust');

// import jQuery from 'jquery';
// window.jQuery = jQuery;
//window.$ = jQuery;
require('semantic/dist/semantic.css');
require('semantic/dist/semantic.js');


                                                                                                                                                                                                                                                                                                                                                                                window.$ = $;
boot();

function boot() {
  let rootElement = null;

  domready(() => {
    rootElement = document.getElementById('app-root');
    render();
    setupHotModuleReload();
  });

  function render() {
    const RootComponent = require('./RootComponent').default;
    ReactDOM.render(<RootComponent />, rootElement);
  }

  function setupHotModuleReload() {
    module.hot && module.hot.accept('./RootComponent', () => setTimeout(hotReload));
  }

  function hotReload() {
    try {
      render();
    } catch (error) {
      renderError(error);
    }
  }

  function renderError(error) {
    ReactDOM.render(<RedBox error={error}/>, rootElement);
  }
}
