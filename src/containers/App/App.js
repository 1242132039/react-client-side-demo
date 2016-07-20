import React, {Component, PropTypes} from 'react'
import {Footer, Header, Navbar} from '../../components';


class App extends Component {

  static propTypes = {
    children: PropTypes.node

  };

  render() {

    return <div>
      <div>
        { this.props.children}

      </div>
      <Footer />
    </div>


  }

}


export default App;
