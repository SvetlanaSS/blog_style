import React from 'react';
import { shallow } from 'enzyme';
import { FacebookAuthorisation } from '../../../components/AuthorisationForm/FacebookAuthorisation';

it('renders without an error', () => {
  shallow(<FacebookAuthorisation />);
});
