import "./Button.css";
import Loader from "../Loader/Loader";

const Button = ({
  value,
  handleLogin,
  isLoading,
  displayTrue,
  displayFalse,
}) => {
  if (isLoading) {
    return (
      <>
        <button className="login">
          <Loader component={"Login"} />
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="login" onClick={handleLogin}>
          {value ? displayTrue : displayFalse}
        </button>
      </>
    );
  }
};

export default Button;


// 2x Home assignment test two dummy props and verify 
// how deep, shallow, mount etc