import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../../actions/modal';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class BlogPost extends Component {

  render() {
    const { post, showModal } = this.props;
    const thumbnailInstance = (
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px'}}>
              <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModal(post)}>{post.title}</a></h4>
              <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
              <p>{post.description.slice(0, 130) + '...'}</p>
              <p style={{color: 'grey'}}>{post.hashtag}</p>
              <p>
                <Button bsStyle="default">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
    return (
      <div>
        {thumbnailInstance}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogPost);
