import React, { Component } from 'react';
import { Link } from 'react-router';

export default class EntitySelector extends Component {

  componentWillMount() {
    this.props.resetSelectedPane(this.props.initiallySelected);
  }

  renderLinks(panes) {
    return panes.map((p) => {
      let onClick = () => this.props.selectPane(p);
      return (
        <li key={p}>
          <Link
            onClick={onClick}
            className={this.props.selectedPane == p ? 'selected' : ''} >
            {p}
          </Link>
        </li>
      );
    });
  }

  render() {
    let paneComponents = React.Children.toArray(this.props.children);
    let paneNames = paneComponents.map((p) => p.props.name);
    return (
      <div>
        <div className="pane-selector">
          <nav className="navbar tag-nav navbar-default">
            <ul className="nav navbar-nav navbar-left">
              { this.renderLinks(paneNames) }
            </ul>
          </nav>
        </div>
        { paneComponents.find((p) => p.props.name == this.props.selectedPane) }
      </div>
    );
  }

}
