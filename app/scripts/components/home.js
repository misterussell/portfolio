import React from 'react';

import About from './about';

export default React.createClass({
  render() {
    return (
      <div className="all-content">
      <About />
        { this.props.children }
      </div>
    );
  }
});
