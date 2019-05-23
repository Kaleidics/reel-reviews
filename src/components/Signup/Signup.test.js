import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { Signup } from './Signup';

describe('<Signup />', () => {

    it('Renders without crashing', () => {
        shallow(<Signup />);
    });

});