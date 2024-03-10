import Button from "./Button";
import { shallow } from "enzyme";


const mockHandleLogin = jest.fn()
    .mockImplementation(() => {
        setLoading(true);
        setTimeout(() => {
            setLogin(!loggedIn);
            setLoading(false);
        }, 2000);
    })

describe("Button Component", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallow(<Button />)
    })

    it("Button is rendered", () => {
        const button = wrapper;
        expect(button.exists()).toBe(true)
    });

    it('Testing for props if is loading true', () => {
        const props = {
            value: "loggedIn",
            handleLogin: mockHandleLogin,
            isLoading: true,
            displayTrue: "Logout",
            displayFalse: "Login",
        }

        wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('value')).toBe('Login');
    })

    it('Testing for props if is loading is false', () => {
        /*
        const props = {
            value: "loggedIn",
            handleLogin: mockHandleLogin,
            isLoading: false,
            displayTrue: "Logout",
            displayFalse: "Login",
        }

        wrapper = shallow(<Button {...props} />);
        expect(wrapper.find('button').prop('value')).toBe("loggedIn");
        */
    })
});
