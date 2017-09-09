import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class BlogPost extends Component {
  render() {
    const { post } = this.props;
    const thumbnailInstance = (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={post.image_url} alt="242x200">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.date}</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
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
