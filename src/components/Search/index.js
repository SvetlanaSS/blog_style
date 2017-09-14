import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaClose from 'react-icons/lib/fa/close';
import { hideModalSearch } from '../../actions/modalSearch';
import { Panel, Collapse } from 'react-bootstrap';
import SearchByToday from './searchByToday';
import SearchByHashtag from './searchByHashtag';
import SearchByMestLikes from './searchByMestLikes';

class Search extends Component {
  render() {
    const { hideModalSearch, showSearch } = this.props;
    const wellStyles = {maxWidth: 400, margin: '0 auto 1rem'};
    return (
      <div onClick={() => hideModalSearch()} style={wellStyles}>
        <Collapse in={showSearch}>
          <div>
            <span><FaClose/></span>
            <Panel>
              <div style={{display: 'inline-block'}}>
                <SearchByToday />
                <SearchByMestLikes />
                <SearchByHashtag />
                <button>Search</button>
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
  return bindActionCreators({ hideModalSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
