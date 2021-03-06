import React, { Component } from 'react';
import { Link } from 'react-router';
import ArticleCard from '../../articleCard/ArticleCard';

export default class ArticleList extends Component {

  componentWillMount() {
    this.props.fetchArticles(this.props.filters, this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.filters != nextProps.filters) {
      this.props.fetchArticles(nextProps.filters, nextProps.token);
    }
  }

  renderArticles(articles) {
    return articles.map((article) => {
      return (
        <ArticleCard suppressFollowButton={this.props.suppressFollowButton} key={article.id} {...article} />
      );
    });
  }

  render() {
    const { articles, loading, error } = this.props.articlesList;
    if(loading) {
      return <div><h3>Loading...</h3></div>;
    } else if (articles.length == 0) {
      return <div><h5>No articles found. </h5></div>;
    }
    return (
      <div>
          {this.renderArticles(articles)}
      </div>
    );
  }
}
