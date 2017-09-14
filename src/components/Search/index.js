import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalSearch } from '../../actions/modalSearch';
import { Panel, Collapse } from 'react-bootstrap';
import FaSearch from 'react-icons/lib/fa/search';
import SearchByToday from './searchByToday';
import SearchByHashtag from './searchByHashtag';
import SearchByMestLikes from './searchByMestLikes';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false
    };
  }

  toggleSearch = () => {
    const { showSearch } = this.state;
    if (showSearch) {
      this.setState({ showSearch: false });
    } else {
      this.setState({ showSearch: true });
    }
  }

  render() {
    const { showSearch } = this.state;
    const wellStyles = {maxWidth: 400, margin: '0 auto 1rem'};
    const buttonsInstance = (
      <div style={wellStyles}>
        <FaSearch size={25} onClick={()=> this.toggleSearch()} />
        <Collapse in={showSearch}>
          <div>
            <Panel>
              <div style={{display: 'inline'}}>
                <SearchByToday />
                <SearchByMestLikes />
              </div>
              <SearchByHashtag />
            </Panel>
          </div>
        </Collapse>
      </div>
    );
    return (
      <div>
        {buttonsInstance}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
