import React, { Component } from 'react';
import { Link } from 'react-router';
import ArticleCard from '../articleCard/ArticleCard';

export default class ArticlesList extends Component {

  componentWillMount() {
    this.props.fetchArticles(this.props.filters, this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.filters != nextProps.filters) {
      this.props.fetchArticles(nextProps.filters, nextProps.token);
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
        <ArticleCard userid={this.props.userid} isAuthenticated={this.props.isAuthenticated} token={this.props.token} key={article.id} {...article} />
      );
    });
  }

  render() {
    const { articles, loading, error } = this.props.articlesList;
    if(loading) {
      return <div><h3>Loading...</h3></div>
    } else if(error) {
      return <div><h5>{error.message}</h5></div>
    }
    return (
      <div>
          {this.renderArticles(articles)}
      </div>
    );
  }
}
