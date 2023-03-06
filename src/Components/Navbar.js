import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCartQuantity, setSidebarOpen } from '../actions/cartActions'
import { compose } from 'redux'
import logo from '../Images/logo.svg'
import { logout } from '../services/auth'

const Navbar = ({
  sidebarOpen,
  item,
  updateCartQuantity,
  setSidebarOpen,
  userData
}) => {
  const navigate = useNavigate()

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    updateCartQuantity(item.foodMenuID)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogout = (e) => {
    logout()
    navigate('/')
  }

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
                      ? 'menu-link-wrapper menu-link-wrapperone'
                      : 'menu-link-wrapper'
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
                <p className="position-relative">
                  <span className="HomeCart--Login"></span>
                </p>
              </div>

              <Link to="/cart" className="flex align-items-center mycart">
                <p className="position-relative">
                  <span className="HomeCart--icon"></span>
                  <span className="cartCount">{item.length}</span>
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
              {userData.Role === 'Admin' ? (
                <>
                  <Link to="/admin/manage-products">
                    <li className="sidebar--itemlist">Manage Products</li>
                  </Link>
                  <Link to="/admin/manage-users">
                    <li className="sidebar--itemlist">Manage Users</li>
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
              <li className="sidebar--itemlist" onClick={handleLogout}>
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
          />
        ) : null}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    item: state.cartReducer.addedItems,
    sidebarOpen: state.cartReducer.sidebarOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (productId, quantity) =>
      dispatch(updateCartQuantity(productId, quantity)),
    setSidebarOpen: (value) => dispatch(setSidebarOpen(value))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navbar)
