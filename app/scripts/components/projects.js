import React from 'react';

import allProjects from '../data/projects';

import SingleProject from './singleProject';

export default React.createClass({
  render() {
    let projects = allProjects.map((project, i) => {
      return <SingleProject key={ i } project={ project } />;
    });
    return <ul className="all-projects">{ projects }</ul>;
  }
});