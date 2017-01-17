import React from 'react';

export default React.createClass({
  render() {
    return (
      <aside className="about">
        <article className="logo-block">
          <img src="../assets/images/logo.svg" />
        </article>
        <article className="bio">
          <h3>About Me:</h3>
          <p>Bio text here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
        <article className="stack">
          <h3>Stack</h3>
          <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>DOM Manipulation</li>
            <li>SPAs</li>
            <li>REST APIs</li>
            <li>AJAX</li>
            <li>JQuery</li>
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
