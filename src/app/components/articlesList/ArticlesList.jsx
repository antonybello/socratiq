import React, { Component } from 'react';
import { Link } from 'react-router';
import ArticleCard from '../articleCard/ArticleCard';

export default class ArticlesList extends Component {
  componentWillMount() {
    if (this.props.tag) {
      this.props.fetchArticlesForTag(this.props.tag);
    }
    else {
      this.props.fetchArticles();
    }
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
        <ArticleCard key={article.id} {...article} />
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
          {this.renderArticles(articles)}
      </div>
    );
  }
}
