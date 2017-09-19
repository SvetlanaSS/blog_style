import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Thumbnail, Popover, OverlayTrigger } from 'react-bootstrap';
import { forceFetchDataFirebase } from '../../actions/firebaseContent';
import Heart from '../Heart';
import { showModalPost } from '../../actions/modalPost';
import { showModalAddComment } from '../../actions/modalAddComment';

class BlogPost extends Component {
  renderPopoverLikes = (likes) => {
    return (
      <Popover id="popover-positioned-bottom" title="Liked by">
        {
          Object.keys(likes).map((key, i) => {
            return (
              <div key={i}>{likes[key].email}</div>
            );
          })
        }
      </Popover>
    );
  }

  renderPopoverComments = (comments) => {
    return (
      <Popover id="popover-positioned-bottom" title="Comments">
        {
          Object.keys(comments).map((key, i) => {
            return (
              <div key={i}>
                <strong >{comments[key].email}:</strong> {comments[key].comment}
              </div>
            );
          })
        }
      </Popover>
    );
  }

  render() {
    const { forceFetchDataFirebase, post, showModalPost, showModalAddComment, post: { likes }, location: { pathname } } = this.props;
    const objectLengthLikes = Object.keys(post.likes).length;
    const objectLengthComments = Object.keys(post.comments).length;
    return (
      <div>
        <Col xs={12} sm={6} md={3} >
          <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', minHeight: '500px', maxHeight: '500px'}}>
            <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModalPost(post)}>{post.title}</a></h4>
            <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
            <p>{post.description.slice(0, 130) + '...'}</p>
            <p style={{color: 'grey'}}>{post.hashtag}</p>
            <div>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.renderPopoverLikes(post.likes)}>
                <a style={{color: 'grey', cursor: 'pointer', marginRight: '1rem'}}>
                  { (objectLengthLikes === 1 || 0) ? <span>{objectLengthLikes} Like</span> : <span>{objectLengthLikes} Likes</span> }
                </a>
              </OverlayTrigger>
              <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.renderPopoverComments(post.comments)}>
                <a style={{color: 'grey', cursor: 'pointer', marginRight: '1rem'}}>
                  { (objectLengthComments === 1 || 0) ? <span>{objectLengthComments} Comment</span> : <span>{objectLengthComments} Comments</span> }
                </a>
              </OverlayTrigger>
            </div>
            <hr/>
            <Heart
              route={pathname}
              postLikes={likes}
              postId={post.id}
              likesList={post.likes}
              forceFetchDataFirebase={forceFetchDataFirebase}
            />
            <section style={{display: 'inline-block'}}>
              <p>
                <a
                  style={{color: 'grey', cursor: 'pointer'}}
                  onClick={() => showModalAddComment(post, pathname)}
                >
                  Add comment
                </a>
              </p>
            </section>
          </Thumbnail>
        </Col>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalPost, forceFetchDataFirebase, showModalAddComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogPost);
