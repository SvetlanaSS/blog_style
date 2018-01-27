import React from 'react';
import { shallow } from 'enzyme';
import { AuthorisationForm } from '../../../components/AuthorisationForm';

it('renders without crashing', () => {
  shallow(<AuthorisationForm />);
});
