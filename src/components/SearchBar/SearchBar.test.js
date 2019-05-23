import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {

    it('Renders without crashing', () => {
        shallow(<SearchBar />);
    });

});