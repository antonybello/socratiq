import React, { Component } from 'react';

export default class EntitySelector extends Component {

  componentWillMount() {
    this.props.resetSelectedPane(this.props.initiallySelected);
  }

  renderLinks(panes) {
    return panes.map((p) => {
      let onClick = () => this.props.selectPane(p);
      return (
        <button key={p} onClick={onClick}>{p}</button>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar tag-nav navbar-default">
          <div className="container">
            <ul className="nav navbar-nav navbar-left">
              { this.renderLinks(this.props.paneNames) }
            </ul>
          </div>
        </nav>
        { this.props.selectedPane }
      </div>
    )
  }

}
