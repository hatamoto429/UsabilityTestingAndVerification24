import Button from "./Button";
import React from "react";
import { shallow } from "enzyme";

// Home Assignment 4, Kadu 

describe("Button Component", () => {
    it("Button is rendered", () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Testing for props if isLoading is true', () => {
        const props = {
            value: "Login",
            handleLogin: jest.fn(),
            isLoading: true,
            displayTrue: "Logged In",
            displayFalse: "Login",
        };
        const wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('Loader').exists()).toBe(true);
        expect(wrapper.find('button').hasClass('login')).toBe(true);
        expect(typeof props.handleLogin).toBe('function');
    })

    it('Testing for props if isLoading is false', () => {
        const props = {
            value: "Logout",
            handleLogin: jest.fn(),
            isLoading: true,
            displayTrue: "Logged In",
            displayFalse: "Login",
        };
        const wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('Loader').exists()).toBe(true);
        expect(wrapper.find('button').hasClass('login')).toBe(true);
        expect(typeof props.handleLogin).toBe('function');
    })
});
