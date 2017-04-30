import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/base/renderField';
import renderTextArea from '../common/base/renderTextArea';
import { postArticle, postArticleSuccess, postArticleFailure } from '../../actions/articleActions';

class ArticlePostBox extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.resetArticle();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newArticle.article && !nextProps.newArticle.error) {
        this.context.router.push('/');
    }
  }

  renderError(newArticle) {
    if (newArticle && newArticle.error) {
      return (
        <div className="alert alert-danger">
          { newArticle ? newArticle.error : '' }
        </div>
        );
    } else {
      return (
      <div className="alert alert-danger">
        You must be signed in to post an article.
      </div>);
    }
  }

  render() {
    const {handleSubmit, submitting, validate, token, newArticle } = this.props;
    if (token) {
      if (newArticle && newArticle.error) {
        return this.renderError(newArticle);
      }
      const typeAheadOptions = {
        typeahead:"typeahead",
        allowNew: true,
        multiple: true,
        newSelectionPrefix:"Add new tag: ",
        options: []
      };
      return (
        <div>
          <h3 className="page-title">New Article</h3>
          <div className='form-container'>
            <form onSubmit={handleSubmit((values,dispatch)=>{post(values, token, dispatch);})}>
              <Field
                     autoFocus="autoFocus"
                     name="title"
                     type="text"
                     className="article-title"
                     component={ renderField }
                     label="title" />
              <Field
                     name="content"
                     type="text"
                     className="content"
                     component={ renderTextArea }
                     label="enter content..." />
              <Field
                     name="tags"
                     type="input"
                     typeahead="typeahead"
                     typeAheadOptions={typeAheadOptions}
                     component={ renderField }
                     label="add tags..." />
                <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={ submitting }>
                  Post
                </button>
                <Link
                      to="/"
                      className="btn btn-error"> Cancel
                </Link>
            </form>
          </div>
        </div>
      );
    }
    return this.renderError();
  }
}

const post = (values, token, dispatch) => {
  values.tags = mapTags(values.tags);
  return new Promise (() => {
    let response = dispatch(postArticle(values, token));
    response.payload.then((payload) => {
      if(payload.status != 201) {
          dispatch(postArticleFailure(payload.data));
      } else {
          dispatch(postArticleSuccess(payload.data))
      }
    }).catch((error) => {
      dispatch(postArticleFailure(error));
    });
  });
}

const validate = (values) => {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'enter a title';
  }
  if (!values.tags || values.tags.length == 0) {
    errors.tags = 'add at least one tag';
  }
  if (!values.content || values.content.trim() === '') {
    errors.content = 'enter some content';
  }

  return errors;
}

const mapTags = (tags) => {
  return tags.map((tagObj) => {
    return tagObj.label;
  });
}

export default reduxForm({
  form: 'ArticlePostBox',
  validate
})(ArticlePostBox);
