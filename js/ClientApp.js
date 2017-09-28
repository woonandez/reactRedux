import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Match } from 'react-router';
import '../public/style.css';

// component imports
import Landing from './Landing';

const App = React.createClass({
  render() {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
});

render(<App />, document.querySelector('#app'));