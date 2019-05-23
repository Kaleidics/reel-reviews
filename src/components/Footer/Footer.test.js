import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Footer from './Footer';

describe('<Footer />', () => {

    it('Renders without crashing', () => {
        shallow(<Footer />);
    });

});