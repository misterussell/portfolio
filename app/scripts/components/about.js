import React from 'react';

export default React.createClass({
  render() {
    return (
      <aside className="about">
        <article className="logo-block">
          <img src="../assets/images/logo.svg" />
        </article>
        <article className="bio">
          <h3 className="section-name">About Me</h3>
          <p>My name is Maxwell Russell, and I'm a recent code school grad. I have a background in management and operations, and studied Art and Art History for my undergrad. I've always enjoyed helping others succeed, aiming to streamline productivity and rethink the way things are done. I'm translating this into code by striving to create thoughtful user experiences. My background in the arts has helped me maintain an eye for visual design as well, my favorite aspect of this being color theory.
          <br></br>
          <br></br>
          With an interest in efficiency and accessibility, I'm excited to keep learning how to create interesting experiences and readable code.</p>
        </article>
        <article className="stack">
          <h3 className="section-name">Stack</h3>
          <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>DOM Manipulation</li>
            <li>SPAs</li>
            <li>REST APIs</li>
            <li>AJAX</li>
            <li>Backbone</li>
            <li>React</li>
            <li>CSS3/CSS Modules</li>
            <li>SASS</li>
            <li>JQuery</li>
            <li>Underscore</li>
            <li>Bourbon/Neat</li>
            <li>MBaas</li>
            <li>Unit Testing</li>
            <li>GitHub Version Control</li>
            <li>OSX + Terminal</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe InDesign</li>
            <li>Google Analytics</li>
            <li>Google AdWords</li>
          </ul>
        </article>
        <article className="links">
          <a href="mailto:max@misterussell.com" label="email" className="email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          <a href="https://medium.com/@MisteRussell" label="medium blog" className="blog"><i className="fa fa-medium" aria-hidden="true"></i></a>
          <a href="https://twitter.com/MisteRussell" label="twitter" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="https://github.com/misterussell" label="github" className="github"><i className="fa fa-github" aria-hidden="true"></i></a>
        </article>
      </aside>
    );
  }
});
