import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaClose from 'react-icons/lib/fa/close';
import { hideModalSearch } from '../../actions/modalSearch';
import { Panel, Collapse, FormGroup, Checkbox, FormControl, Button } from 'react-bootstrap';
import { todaysPostsFilter } from '../../actions/firebaseContent';

class Search extends Component {
  render() {
    const { hideModalSearch, showSearch, todaysPostsFilter, location: { pathname } } = this.props;
    const wellStyles = {maxWidth: 400, margin: '0 auto'};
    return (
      <div style={wellStyles}>
        <Collapse in={showSearch}>
          <div>
            <span><FaClose onClick={() => hideModalSearch()} size={20} style={{color: '#635F5F', float: 'right', margin: '1rem 1.3rem'}}/></span>
            <Panel>
              <FormGroup style={{paddingTop: '2rem'}}>
                <Checkbox inline onClick={() => todaysPostsFilter(pathname) }>
                  Today's posts
                </Checkbox>
                {' '}
                <Checkbox inline>
                    Most liked posts
                </Checkbox>
                {' '}
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
  return bindActionCreators({ hideModalSearch, todaysPostsFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
