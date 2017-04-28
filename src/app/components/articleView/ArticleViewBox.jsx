import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import FollowButton from '../followButton/FollowButton';

export default class ArticleViewBox extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchArticle(this.props.articleId, this.props.token);
  }

  renderFollowButton() {
    const { isAuthenticated, userid, author } = this.props;
    if (isAuthenticated) {
      if (userid !== author.userid) {
          return (
            <FollowButton followed={author.followed} onClick={this.handleFollow} />
          );
      }
    }
  }

  renderTags(tags) {
    return tags.map((t, i) => {
      return (
        <li key={i} className="tag"><Link to={`/tag/${t}`}>{t}</Link></li>
      )
    });
  }

  render() {
    const { article, loading, error } = this.props.activeArticle;
    if (loading) {
      return <div className="main-container"><h3>Loading...</h3></div>;
    } else if(error) {
      return <div className="alert alert-danger">{error.message}</div>
    } else if(!article) {
      return <span />
    }
    return (
      <div className="article-container">
        <h3>{article.title}</h3>
        <h5>{article.author.name} {this.renderFollowButton()}</h5>
        <h5>{article.author.institution}</h5>
        <p>{article.content}</p>
        <ul className="tags list-inline">
          Tags: {this.renderTags(article.tags)}
        </ul>
     </div>
    );
  };
}
