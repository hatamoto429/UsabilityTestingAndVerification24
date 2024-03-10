import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import React from "react";

import Home from "./components/Home/Home";
import About from "./components/About/about";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

describe('App component', () => {
    let wrapper = null;

    const component = (path) => {
        return mount(
            <MemoryRouter initialEntries={[`${path}`]}>
                <App />
            </MemoryRouter>
        );
    }

    beforeEach(() => {
        wrapper = component();
    })

    it("is Rendered", () => {
        const app = wrapper.find({ "data-testid": "App" });
        expect(app.length).toBe(1);
    });

    it("display nav links with correct display name", () => {
        const navLinks = wrapper.find("NavLink");

        expect(navLinks.at(0).text()).toBe("Home");
        expect(navLinks.at(1).text()).toBe("About");
        expect(navLinks.at(2).text()).toBe("Products");
    });

    it("display navlinks with correct path name", () => {
        const navLinks = wrapper.find("NavLink");

        expect(navLinks.at(0).prop("to")).toBe("/");
        expect(navLinks.at(1).prop("to")).toBe("/about");
        expect(navLinks.at(2).prop("to")).toBe("/products");
    });

    it("display navlinks with button prop", () => {
        const button = wrapper.find("Button");

        expect(button.prop("value")).toBe(false);
        expect(typeof button.prop("handleLogin")).toBe("function");
        expect(button.prop("displayTrue")).toBe("Logout");
        expect(button.prop("displayFalse")).toBe("Login");
        expect(button.prop("isLoading")).toBe(false);
    });

    it("renders home correctly", () => {
        wrapper = component("/");

        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(About)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });

    it("renders about correctly", () => {
        wrapper = component("/about");

        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(About)).toHaveLength(1);
        expect(wrapper.find(Products)).toHaveLength(0);
        expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });

    it("renders products correctly", () => {
        wrapper = component("/products");

        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(About)).toHaveLength(0);
        expect(wrapper.find(Products)).toHaveLength(1);
        expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });
})

