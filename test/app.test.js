import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import ApiFilter from '../lib/ApiFilter';
import FakeData from '../lib/fakeData';

let {sevenHourArray, tenDayArray, currentWeatherObject } = apiFilter(data);

describe('App', () => {

  it.only('should exist', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeDefined()
  });

});