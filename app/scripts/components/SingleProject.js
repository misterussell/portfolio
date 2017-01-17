import React from 'react';

// create array of tool links that will search via the tool name

export default React.createClass({
  render() {
      let tools = this.props.project.tools.map((tool, i) => {
        return <li key={ i }>{ tool }</li>;
      });
    return (
      <article className="single-project">
        <h2 className="name">{ this.props.project.name }</h2>
        <img className="quickview" src={ this.props.project.image} />
        <h3 className="about-project">About: { this.props.project.about }</h3>
        <h3 className="tools-title">Tools</h3>
        <ul className="tools">{ tools }</ul>
        <h3 className="challenges">Challenges: { this.props.project.challenge }</h3>
      </article>
    );
  }
});
