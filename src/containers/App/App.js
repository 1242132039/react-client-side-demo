import styles from './App.styl';
import React, {Component, PropTypes} from 'react';
import {Footer, Header, Navbar} from '../../components';



class App extends Component {

  static propTypes = {
    children: PropTypes.node

  };

  render() {

    return (
      <section id="application">
        <Header />
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </section>
    );
  }

}


export default App;
