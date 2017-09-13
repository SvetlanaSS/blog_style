import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalSearch } from '../../actions/modalSearch';
import { Button, Well, Collapse } from 'react-bootstrap';


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
        <Button
          bsSize="large"
          block
          onClick={()=> this.toggleSearch()}
        >Click here for search and filter</Button>
        <Collapse in={showSearch}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
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
