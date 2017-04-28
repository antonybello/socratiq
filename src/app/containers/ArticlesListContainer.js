import { connect } from 'react-redux'
import { fetchArticles, fetchArticlesForTag, fetchArticlesSuccess, fetchArticlesFailure } from '../actions/articleActions';
import ArticlesList from '../components/articlesList/ArticlesList';

const mapStateToProps = (state, currentProps) => {
  return {
    isAuthenticated: state.user.status === 'authenticated',
    token: state.user.token,
    articlesList: state.articles.articlesList
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let filters = {};
  if (ownProps.tag) {
    filters.tag = ownProps.tag
  };
  return {
    filters: filters,
    fetchArticles: (filters) => {
      return new Promise (() => {
        let response = dispatch(fetchArticles(filters));  
        response.payload.then((payload) => {
          if(payload.status != 200) {
              dispatch(fetchArticlesFailure(payload.data));
          } else {
              dispatch(fetchArticlesSuccess(payload.data))
          }
        }).catch((error) => {
          dispatch(fetchArticlesFailure(payload));
        });
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
