import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="all-content">
        <aside className="">
          <article className="logo-block">
          </article>
          <article className="bio">
            <h3>Maxwell Russell</h3>
            <p>Bio text here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
          <article className="stack">
            <h3>Stack</h3>
            <ul>
              <li>JS</li>
              <li>Backbone</li>
              <li>React</li>
              <li>SASS</li>
              <li>JQuery</li>
              <li>Underscore</li>
              <li>Underscore</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Etc...</li>
            </ul>
          </article>
          <article className="links">
            <a href="mailto:max@misterussell.com" label="email"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href="https://medium.com/@MisteRussell" label="medium blog"><i className="fa fa-medium" aria-hidden="true"></i></a>
            <a href="https://twitter.com/MisteRussell" label="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="https://github.com/misterussell" label="github"><i className="fa fa-github" aria-hidden="true"></i></a>
          </article>
        </aside>
        { this.props.children }
      </div>
    );
  }
});
