import App from './App';
import EmptyRender from './Empty';

import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter : new EnzymeAdapter()
});

// test('renders without errors', () => {
//   const wrapper = shallow(<App/>);
//   console.log(wrapper.debug());
// });

// test('renders non-empty component', () => {
//   const wrapper = shallow(<App/>);
//   expect(wrapper.exists()).toBe(true);
// });

// test('renders empty component', () => {
//   const wrapper = shallow(<EmptyRender/>);
//   expect(wrapper.isEmptyRender()).toBe(true);
// });

test('renders without errors', () => {
  const wrapper = shallow(<App/>);
  console.log(wrapper.debug());
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
})

test('renders button', () => {

})

test('renders counter display', () => {

})

test('counter starts at 0', () => {

})

test('clicking on button increments counter display', () => {

})