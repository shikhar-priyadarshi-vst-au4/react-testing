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
  const buttonComponent = findByTestAttr(wrapper, 'increment-button');
  expect(buttonComponent.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup(App);
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
})

test('counter starts at 0', () => {
  const wrapper = setup(App);
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0");
})

test('clicking on button increments counter display', () => {
  const wrapper = setup(App);
  const buttonComponent = findByTestAttr(wrapper, 'increment-button');
  buttonComponent.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1");
})

test('clicking on button decrements counter display', () => {
  const wrapper = setup(App);
  const buttonComponent = findByTestAttr(wrapper, 'decrement-button');
  buttonComponent.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0"); 
})


describe('increment button', () => {
  
  test("renders increment button", () => {
    const wrapper = setup(App);
    const incrementButton = findByTestAttr(wrapper,'increment-button');
    expect(incrementButton.length).toBe(1);
  })

  test('increment count on increment button click', () => {
    const wrapper = setup(App);
    const incrementButton = findByTestAttr(wrapper,'increment-button');
    incrementButton.simulate('click');
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("1");
  })
})

describe('decrement button', () => {
  let wrapper, incrementButton, decrementButton;
  beforeEach(() => {
    wrapper = setup(App);
    incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');
    decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');
  })
  test('renders decrement button', () => {
    expect(decrementButton.length).toBe(1);
  })
  test('decrement count by decrement button click', () => {
    
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0");
  })
})

describe("error when counter goes below zero", () => {
  
  test("error does not show when not needed", () => {
    const wrapper = setup(App);
    const errorTag = findByTestAttr(wrapper, 'error');
    const errorHiddenClass = errorTag.hasClass('hidden');
    expect(errorHiddenClass).toBe(true);
  });

  describe('counter is 0 and decrement button is clicked', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(App);
      const decrementButton = findByTestAttr(wrapper, 'decrement-button');
      decrementButton.simulate('click');
    })
    
    test('error is shown', () => {
      const errorTag = findByTestAttr(wrapper, 'error');
      const errorHiddenClass = errorTag.hasClass('hidden');
      expect(errorHiddenClass).toBe(false); 
    })

    test('display counter is 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe("0");
    })

    test('increment button click clear errors', () => {
      const incrementButton = findByTestAttr(wrapper, 'increment-button');
      incrementButton.simulate('click');
      const errorTag = findByTestAttr(wrapper, 'error');
      const errorHiddenClass = errorTag.hasClass('hidden');
      expect(errorHiddenClass).toBe(true);
    })
  })
})