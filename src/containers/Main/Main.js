/**
 * Created by fechow on 7/20/16.
 */



import styles from './Main.styl';
import React, {Component, PropTypes} from 'react';
import {Footer, Header, Navbar} from '../../components';
import {Divider} from 'stardust'

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <section id="application">
        <Header />
        <div className={styles.container}>
          <Navbar />
          <Divider className="hidden"></Divider>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>

      </section>
    );
  }
}
