/**
 * Created by fechow on 7/17/16.
 */

import _ from 'lodash'
import React, { Children } from 'react'


// ===============================================================
// Instance Utils
// ===============================================================
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {*} Component A React.Component.
 * @param {*} props Props from a React.Component instance.
 * @returns {{}} A shallow copy of the prop object
 */
export const getUnhandledProps = (Component, props) => {
  const handledProps = _.union(
    Component.autoControlledProps,
    _.keys(Component.defaultProps),
    _.keys(Component.propTypes),
  )

  return _.omit(props, handledProps)
}
