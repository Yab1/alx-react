import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.BodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const styles = StyleSheet.create({
  BodySectionWithMargin: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;
