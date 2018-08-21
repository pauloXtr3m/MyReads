import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
	it('shallow renders without crashing', () => {
		expect(shallow(<App />))
	});

	it('mounts without crashing', () => {
		expect(mount(<App />))
	});
});