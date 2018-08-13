exports.init = function(componentName) {
    return `'use strict';
import React, {Component} from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ${componentName} extends React.Component {

      constructor(props) {
          super(props);
      }

      render() {
          return (
            <div>Empty Component</div>
        );
      }
}

${componentName}.propTypes = {}

export default ${componentName};`
};
