import React, { Component } from 'react';
import { Link } from 'react-router'
;
export default class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  renderCategories(categories) {
     return categories.map((c) => {
        c = c.trim();
        return (
          <Link to={"filter/" + c} key={c} className="list-group-item-text">{" " + c + " "}</Link>
        );
     });
  }

  renderArticles(articles) {
    return articles.map((article) => {
      return (
        <li className="list-group-item" key={article.article_id}>
          <Link style={{color:'black'}} to={"articles/" + article.article_id}>
            <h3 className="list-group-item-heading">{article.title}</h3>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { articles, loading, error } = this.props.articlesList;
    if(loading) {
      return <div><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div>
        <ul className="list-group">
          {this.renderArticles(articles)}
        </ul>
      </div>
    );
  }
}
