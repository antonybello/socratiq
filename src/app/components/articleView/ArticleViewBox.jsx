import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import FollowButtonContainer from '../../containers/FollowButtonContainer';

export default class ArticleViewBox extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchArticle(this.props.articleId, this.props.token);
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
      <div className="article-container white-bg">
        <h3>{article.title}</h3>
        <h5>
          <Link to={`/profile/${article.author.userid}`}>{article.author.name}</Link>
          <FollowButtonContainer followee={{ id: article.author.userid, type: 'user' }}/>
        </h5>
        <h5>{article.author.institution}</h5>
        <p>{article.content}</p>
        <ul className="tags list-inline">
          Tags: {this.renderTags(article.tags)}
        </ul>
     </div>
    );
  };
}
