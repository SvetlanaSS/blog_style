import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaClose from 'react-icons/lib/fa/close';
import { hideModalSearch } from '../../actions/modalSearch';
import { Panel, Collapse, FormGroup, FormControl, Button } from 'react-bootstrap';
import { todaysPostsFilter, removeTodaysPostsFilter, mostLikedPostsFilter } from '../../actions/firebaseContent';
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
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const { location: { pathname }, todaysPostsFilter, removeTodaysPostsFilter, mostLikedPostsFilter } = this.props;
    this.setState({ [name]: value });

    if (name === 'todaysPosts') {
      this.state.todaysPosts ? removeTodaysPostsFilter(pathname) : todaysPostsFilter(pathname);
    } else if (name === 'mostLikedPosts') {
      this.state.mostLikedPosts ? console.log(11123) : mostLikedPostsFilter(pathname);
    } else {
      null;
    }
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
              <div>
                <FormControl
                  type="text"
                  placeholder="Enter hashtag"
                />
                <Button bsSize="small" style={{marginTop: '1rem'}}>Search</Button>
              </div>
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
    mostLikedPostsFilter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
