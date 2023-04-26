import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../../pages/Home';
import store from '../../Redux/store';

describe('Home', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
        ,
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
