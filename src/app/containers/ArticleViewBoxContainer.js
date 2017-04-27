import { connect } from 'react-redux'
import { fetchArticle, fetchArticleSuccess, fetchArticleFailure } from '../actions/articleActions';
import ArticleViewBox from '../components/articleView/ArticleViewBox';

const mapStateToProps = (state, currentProps) => {
  return {
    activeArticle: state.articles.activeArticle,
    articleId: currentProps.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (id) => {
      return new Promise (() => {
        let response = dispatch(fetchArticle(id));
        response.payload.then((payload) => {
          if(payload.status != 200) {
              dispatch(fetchArticleFailure(payload.data));
          } else {
              dispatch(fetchArticleSuccess(payload.data))
          }
        }).catch((error) => {
          dispatch(fetchArticleFailure(payload));
        });
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewBox);
