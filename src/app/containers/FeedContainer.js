import { connect } from 'react-redux'
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../actions/articleActions';
import Feed from '../components/feed/Feed';


const mapStateToProps = (state) => {
  return {
    articlesList: state.articles.articlesList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles()).then((response) => {
            !response.error ? dispatch(fetchArticlesSuccess(response.payload.data)) : dispatch(fetchArticlesFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
