import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class BlogPost extends Component {
  render() {
    const { post } = this.props;
    const thumbnailInstance = (
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px'}}>
              <h4>{post.title}</h4>
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


export default BlogPost;
