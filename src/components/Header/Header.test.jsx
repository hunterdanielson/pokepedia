import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppProvider from '../../providers/appProvider';

describe('header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(<AppProvider><Header /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
