import React from 'react';

export default React.createClass({
  render() {
      let tools = this.props.project.tools.map((tool, i) => {
        return <li key={ i }>{ tool }</li>;
      });
    return (
      <article className="single-project">
        <h2 className="name">{ this.props.project.name }</h2>
        <ul className="tools">{ tools }</ul>
        <img src={ this.props.project.image} />
        <h3 className="about">About: { this.props.project.about }</h3>
        <h3 className="challenges">Challenges: { this.props.project.challenge }</h3>
      </article>
    );
  }
});
