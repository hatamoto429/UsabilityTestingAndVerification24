import ProductDetails from "./ProductDetails";
import React from "react";
import { shallow } from 'enzyme';
import { useParams } from 'react-router-dom';

//HOME ASSIGNMENT TEST FOR PRODUCT DEAILS COMPONENT 
//Solved

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));


describe('Test Product Details page', () => {
    it('Renders product details correctly', () => {

        useParams.mockReturnValue({ id: '1', type: 'Test' });

        const wrapper = shallow(<ProductDetails />);

        expect(wrapper.find('.content').exists()).toBe(true);
        expect(wrapper.find('.product').exists()).toBe(true);
        expect(wrapper.find('.image').exists()).toBe(true);
        expect(wrapper.find('.details').exists()).toBe(true);
        expect(wrapper.find('h2').exists()).toBe(true);
        expect(wrapper.find('h2').text()).toBe('Test - 1');
        expect(wrapper.find('p')).toHaveLength(2);
    });
});