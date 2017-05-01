import { connect } from 'react-redux'
import { fetchArticles, fetchArticlesForTag, fetchArticlesSuccess, fetchArticlesFailure } from '../actions/articleActions';
import ArticleList from '../components/common/lists/ArticleList';

const mapStateToProps = (state) => {
  return {
    articlesList: state.articles.articlesList
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filters: ownProps.filters,
    fetchArticles: (filters, token) => {
      return new Promise (() => {
        let response = dispatch(fetchArticles(filters, token));
        response.payload.then((payload) => {
          if(payload.status != 200) {
              dispatch(fetchArticlesFailure(payload.data));
          } else {
              dispatch(fetchArticlesSuccess(payload.data));
          }
        }).catch((error) => {
          let errorMessage;
          if (error.response.status && error.response.status === 404) {
            errorMessage = { message: `No articles found for ${filters.tag}.`};
          } else {
            errorMessage = error;
          }
          dispatch(fetchArticlesFailure(errorMessage));
        });
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
