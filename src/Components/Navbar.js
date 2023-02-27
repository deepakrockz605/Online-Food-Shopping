import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCartQuantity } from "../actions/cartActions";
import { compose } from "redux";
import logo from "../Images/logo.svg";
import { logout } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(!sidebarOpen);
    props.Navbarstatus(open);
  };

  useEffect(() => {
    props.updateCartQuantity(props.item.addedItems.foodMenuID);
  }, []);

  const handleUser = (e) => {
    setHoverUser(!hoverUser);
  };

  const handleLogout = (e) => {
    logout()
    navigate('/')
  };

  var data = props.state;

  return (
    <section className="navbar--section">
      <div>
        <div className="fixedNavbar">
          <div className="navbarBox">
            <div className="logoClickbtn">
              <button
                className="logo-btn"
                onClick={() => onSetSidebarOpen(true)}
              >
                <div
                  className={
                    sidebarOpen
                      ? "menu-link-wrapper menu-link-wrapperone"
                      : "menu-link-wrapper"
                  }
                >
                  <div className="menu-link">
                    <span className="lines"></span>
                    <span className="lines"></span>
                    <span className="lines"></span>
                  </div>
                </div>
              </button>
            </div>

            <Link to="/dashboard" className="delicious--logo">
              <img src={logo} alt="logo" className="delicious--image" />
            </Link>
            <div className="callIcon--section">
              <div className="callIcon--UserLog position-relative">
                {/* <div className="callIcon--UserLogActive">
                  <div>
                    <p className="ActiveUsername">{data.email}</p>
                    <ul className="ActiveUsernameUl">
                      <li className="ActiveUsernameList">
                        <span>Profile</span>
                      </li>
                      <li
                        className="ActiveUsernameList"
                        onClick={() => {
                          logout();
                        }}
                      >
                        <span>Logout</span>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <p className="position-relative">
                  <span className="HomeCart--Login" onClick={handleUser}></span>
                </p>
              </div>

              <Link to="/cart" className="flex align-items-center mycart">
                <p className="position-relative">
                  <span className="HomeCart--icon"></span>
                  <span className="cartCount">
                    {props.item.addedItems.length}
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>

        {sidebarOpen ? (
          <div className="sidebar--Space">
            <span>
              <img src={logo} alt="logo" className="delicious--Sidebarimage" />
            </span>
            <ul
              className="sidebar--list"
              onClick={() => onSetSidebarOpen(false)}
            >
              <Link to="/food-menu">
                <li className="sidebar--itemlist">We Are Food Masters</li>
              </Link>
              <Link to="/food-menu">
                <li className="sidebar--itemlist">Delicious Menu</li>
              </Link>
              <Link to="/our-story">
                <li className="sidebar--itemlist">Our Story</li>
              </Link>
              <Link to="/get-in-touch">
                <li className="sidebar--itemlist">Get in touch</li>
              </Link>
              <Link to="/cart">
                <li className="sidebar--itemlist">My Cart</li>
              </Link>
              <li
                className="sidebar--itemlist"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <div className="sidebar--NoSpace"></div>
        )}

        {sidebarOpen ? (
          <div
            className="overlayWrapper"
            onClick={() => onSetSidebarOpen(false)}
          ></div>
        ) : null}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    item: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (productId, quantity) =>
      dispatch(updateCartQuantity(productId, quantity)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navbar);
