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
    let paneComponents = React.Children.toArray(this.props.children);
    let paneNames = paneComponents.map((p) => p.props.name);
    return (
      <div>
        <nav className="navbar tag-nav navbar-default">
          <div className="container">
            <ul className="nav navbar-nav navbar-left">
              { this.renderLinks(paneNames) }
            </ul>
          </div>
        </nav>
        { paneComponents.find((p) => p.props.name == this.props.selectedPane) }
      </div>
    )
  }

}
