import PropTypes from 'prop-types';
import React, { Component } from 'react';

class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;
