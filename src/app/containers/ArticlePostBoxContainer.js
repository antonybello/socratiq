import { connect } from 'react-redux'
import { postArticle, postArticleSuccess, postArticleFailure, resetPostArticle } from '../actions/articleActions';
import ArticlePostBox from '../components/articlePost/ArticlePostBox';

const mapDispatchToProps = (dispatch) => {
  return {
    resetArticle: () => {
      dispatch(resetPostArticle());
    }
  }
}

const mapStateToProps = (state, currentProps) => {
  return {
    newArticle: state.articles.newArticle,
    token: state.user.token
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePostBox);
