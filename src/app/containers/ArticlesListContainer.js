import { connect } from 'react-redux'
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../actions/articleActions';
import ArticlesList from '../components/articlesList/ArticlesList';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.status === 'authenticated',
    token: state.user.token,
    articlesList: state.articles.articlesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => {
      return new Promise (() => {
        let response = dispatch(fetchArticles());
        response.payload.then((payload) => {
          if(payload.status != 200) {
              dispatch(fetchArticlesFailure(payload.data));
          } else {

              dispatch(fetchArticlesSuccess(payload.data))
          }
        }).catch((payload) => {
          dispatch(fetchArticlesFailure(payload));
        });
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
