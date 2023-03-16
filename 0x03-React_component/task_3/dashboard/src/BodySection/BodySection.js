import React, { Component } from 'react';

class BodySection extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
      </div>
    );
  }
}
