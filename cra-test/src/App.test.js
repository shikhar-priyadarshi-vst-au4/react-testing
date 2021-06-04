import App from './App';
import EmptyRender from './Empty';

import Enzyme, {shallow, ShallowWrapper} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter : new EnzymeAdapter()
});

/**
 * helpers function
 * @function setup 
 * @returns {ShallowWrapper}
 */

 const setup = (ParsedComponent) => shallow(<ParsedComponent/>)

 const findByTestAttr = (wrapper, val) => wrapper?.find(`[data-test='${val}']`)

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
  const wrapper = setup(App);
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
})

test('renders button', () => {
  const wrapper = setup(App);
  const buttonComponent = findByTestAttr(wrapper, 'component-button');
  expect(buttonComponent.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup(App);
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
})

test('counter starts at 0', () => {

})

test('clicking on button increments counter display', () => {

})