import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import AppProvider from '../../providers/appProvider';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<AppProvider><List /></AppProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
