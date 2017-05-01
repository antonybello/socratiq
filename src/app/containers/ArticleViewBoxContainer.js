import { connect } from 'react-redux'
import { fetchArticle, fetchArticleSuccess, fetchArticleFailure } from '../actions/articleActions';
import ArticleViewBox from '../components/articleView/ArticleViewBox';

const mapStateToProps = (state, currentProps) => {
  const activeArticle = state.articles.activeArticle;
  return {
    activeArticle: state.articles.activeArticle,
    articleId: currentProps.id,
    author: activeArticle.article ? activeArticle.article.author : null,
    isAuthenticated: state.user.status === 'authenticated',
    userid: state.user.userid,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id, token) => {
      return new Promise (() => {
        let response = dispatch(fetchArticle(id, token));
        response.payload.then((payload) => {
          if(payload.status != 200) {
              dispatch(fetchArticleFailure(payload.data));
          } else {
              dispatch(fetchArticleSuccess(payload.data))
          }
        }).catch((error) => {
          dispatch(fetchArticleFailure(error));
        });
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewBox);
