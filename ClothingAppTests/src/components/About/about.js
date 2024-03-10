import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const navigate = useNavigate();
  //Component did mount
  useEffect(() => {
    navigate("info");
    // navigate("/about/info");
  }, []);
  return (
    <div>
      <nav
        data-testid="mini_nav"
        style={{ border: "none", justifyContent: "center" }}
      >
        <NavLink to="info">Info</NavLink>
        <NavLink to="offers">Offers</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default About;
