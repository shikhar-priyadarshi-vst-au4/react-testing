import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {Congrats} from './Congrats';
import {findByTestAttr, checkProps} from './tests/testUtils';

const setup = (props = {}) => {
    return shallow(<Congrats {...props}/>)
}

Enzyme.configure({
    adapter : new EnzymeAdapter()
});

test('renders without errors', () => {

const wrapper = setup();
const component = findByTestAttr(wrapper, 'congrats-component');
expect(component.length).toBe(1);
});

test('renders no text when success is false', () => {
    const wrapper = setup({success : false});
    const text = findByTestAttr(wrapper, 'congrats-component').text();
    expect(text.length).toBe(0);
})

test('renders non-empty congrats message when success is true', () => {
    const wrapper = setup({success : true});
    const text = findByTestAttr(wrapper, 'congrats-component').text();
    expect(text.length).toBeGreaterThan(0);
})

test('does not throw warning with expected props', () => {
    const expectedProps = {success : false};
    // const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
    // expect(propError).toBeUndefined();
    checkProps(Congrats, expectedProps);
})