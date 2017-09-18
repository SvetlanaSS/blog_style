import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forceFetchDataFirebase } from '../../actions/firebaseContent';
import Heart from '../Heart';
import { showModalPost } from '../../actions/modalPost';
import { showModalAddComment } from '../../actions/modalAddComment';
import { Col, Thumbnail } from 'react-bootstrap';

class BlogPost extends Component {
  render() {
    const { forceFetchDataFirebase, post, showModalPost, showModalAddComment, post: { likes }, location: { pathname } } = this.props;
    return (
      <div>
        <Col xs={12} sm={6} md={3} >
          <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', minHeight: '500px', maxHeight: '500px'}}>
            <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModalPost(post)}>{post.title}</a></h4>
            <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
            <p>{post.description.slice(0, 130) + '...'}</p>
            <p style={{color: 'grey'}}>{post.hashtag}</p>
            <div>
              <span style={{color: 'grey', display: 'inline-block', marginRight: '1rem'}}>
                {Object.keys(post.likes).length} Likes
              </span>
              <span style={{color: 'grey', display: 'inline-block'}}>
                <a style={{color: 'grey'}}>
                  {Object.keys(post.comments).length} Comments
                </a>
              </span>
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
                <a style={{color: 'grey'}} onClick={() => showModalAddComment()}>
                Add comment
                </a>
              </p>
            </section>
            {/* <Comment
              route={pathname}
              postComments={comments}
              postId={post.id}
              forceFetchDataFirebase={forceFetchDataFirebase}
            /> */}
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
