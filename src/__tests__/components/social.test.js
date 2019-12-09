import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SocialLogin from '../../App/Components/socialLogin';
import LoginFacebook from '../../App/Components/facebookLogin';
import { Provider } from 'react-redux';
import Button from '../../App/Components/socialButton';

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureMockStore(middlewares);
let store = mockStore({
	facebook: {
		user: {},
	},
	GoogleLogin: jest.fn(),
});

Enzyme.configure({
	adapter: new Adapter(),
});

describe('Render SocialLogin component', () => {
	it('to have wrapper class', async () => {
		const wrapper = render(
			<Provider store={store}>
				<SocialLogin />
			</Provider>,
		);
		wrapper.find(<LoginFacebook />).html();
		wrapper.find(<Button />).html();
	});
});