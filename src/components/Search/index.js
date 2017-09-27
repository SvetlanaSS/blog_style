import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaClose from 'react-icons/lib/fa/close';
import { hideModalSearch } from '../../actions/modalSearch';
import { Panel, Collapse, FormGroup, Button } from 'react-bootstrap';
import { todaysPostsFilter, removeTodaysPostsFilter, mostLikedPostsFilter, removeMostLikedPostsFilter } from '../../actions/firebaseContent';
import styled from 'styled-components';

const Checkbox = styled.span`
  display: inline-block;
  margin: 0 1rem;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysPosts: false,
      mostLikedPosts: false,
      hashtag: ''
    };
  }

  // för checkbox
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const { location: { pathname }, todaysPostsFilter, removeTodaysPostsFilter, mostLikedPostsFilter, removeMostLikedPostsFilter } = this.props;
    this.setState({ [name]: value });

    if (name === 'todaysPosts') {
      this.state.todaysPosts ? removeTodaysPostsFilter(pathname) : todaysPostsFilter(pathname);
    } else if (name === 'mostLikedPosts') {
      this.state.mostLikedPosts ? removeMostLikedPostsFilter(pathname) : mostLikedPostsFilter(pathname);
    } else {
      null;
    }
  }

  // för input-fält
  handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    const { location: { pathname } } = this.state;
    e.preventDefault();
    this.props.searchByHashtag(pathname);
  }

  render() {
    const { hideModalSearch, showSearch } = this.props;
    const { todaysPosts, mostLikedPosts } = this.state;
    const wellStyles = {maxWidth: 400, margin: '0 auto'};
    return (
      <div style={wellStyles}>
        <Collapse in={showSearch}>
          <div>
            <span><FaClose onClick={() => hideModalSearch()} size={20} style={{color: '#635F5F', float: 'right', margin: '1rem 1.3rem'}}/></span>
            <Panel>
              <FormGroup style={{paddingTop: '2rem'}}>
                <input
                  name="todaysPosts"
                  type="checkbox"
                  checked={todaysPosts}
                  onChange={this.handleInputChange}
                />
                <Checkbox>Today's posts</Checkbox>
                <input
                  name="mostLikedPosts"
                  type="checkbox"
                  checked={mostLikedPosts}
                  onChange={this.handleInputChange}
                />
                <Checkbox>Most liked posts</Checkbox>
              </FormGroup>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter hashtag"
                  className="form-control"
                  onChange={this.handleOnChange}
                />
                <Button bsSize="small" style={{marginTop: '1rem'}}>Search</Button>
              </form>
            </Panel>
          </div>
        </Collapse>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showSearch: state.modalSearch.showModalSearch
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    hideModalSearch,
    todaysPostsFilter,
    removeTodaysPostsFilter,
    mostLikedPostsFilter,
    removeMostLikedPostsFilter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
