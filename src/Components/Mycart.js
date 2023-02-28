import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import {
  addQuantity,
  subtractQuantity,
  removeItem
} from '../actions/cartActions'
import MainScreen from './screens/MainScreen/MainScreen'

const MyCart = (props) => {
  const [deliveryFlag, setDeliveryFlag] = useState(false)
  const [ZIPvalue, setZIPvalue] = useState('')
  const [Mobilevalue, setMobilevalue] = useState('')
  const [ShipFullName, setShipFullName] = useState('')
  const [shipState, setshipState] = useState('')
  const [shipCity, setshipCity] = useState('')
  const [shipaddress, setShipaddress] = useState('')
  const [shipEmail, setShipEmail] = useState('')
  const [shipLandmark, setShipLandmark] = useState('')
  const [emailErrorFlag, setEmailErrorFlag] = useState(false)
  const [errorLogZip, setErrorLogZip] = useState(false)
  const [errorLogMobile, setErrorLogMobile] = useState(false)

  const handleAddQuantity = (foodMenuID) => {
    props.addQuantity(foodMenuID)
  }

  const handleSubtractQuantity = (foodMenuID) => {
    props.subtractQuantity(foodMenuID)
  }

  const handleRemove = (foodMenuID) => {
    props.removeItem(foodMenuID)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [value, setValue] = useState('1')

  const handleChangeSwipe = (event, newValue) => {
    if (deliveryFlag) {
      setValue(newValue)
    }
  }

  const handleAddressSubmit = (e) => {
    e.preventDefault()
    if (errorLogZip || errorLogMobile || emailErrorFlag) {
      setValue('1')
      setDeliveryFlag(false)
    }
    if (
      emailErrorFlag === false &&
      errorLogMobile === false &&
      errorLogZip === false
    ) {
      setValue('2')
      setDeliveryFlag(true)
    }
  }

  const handlePreviousCheck = (e) => {
    setValue('1')
  }

  const handlePaymentCheck = (e) => {
    if (!deliveryFlag === true) {
      alert('Please Fill The Delivery Address First To Continue')
    }
  }

  const handleDeliveryReset = (e) => {
    setDeliveryFlag(false)
  }

  const handleDeliveryValidation = async (e) => {
    if (e.target.id === 'fullName') {
      const re = /^[a-zA-Z ]*$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setShipFullName(e.target.value)
      } else {
        alert('Only Text Values Accepted')
      }
    }

    if (e.target.id === 'shipState') {
      const re = /^[a-zA-Z ]*$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setshipState(e.target.value)
      } else {
        alert('Only Text Values Accepted')
      }
    }

    if (e.target.id === 'shipCity') {
      const re = /^[a-zA-Z ]*$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setshipCity(e.target.value)
      } else {
        alert('Only Text Values Accepted')
      }
    }

    if (e.target.id === 'shipZIP') {
      const re = /^[0-9\b]+$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setZIPvalue(e.target.value)
        if (ZIPvalue.length <= 4) {
          setErrorLogZip(true)
        } else {
          setErrorLogZip(false)
        }
      } else {
        alert('Only Numbers are Allowed')
      }
    }

    if (e.target.id === 'shipMobile') {
      const re = /^[0-9\b]+$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setMobilevalue(e.target.value)
        if (Mobilevalue.length <= 7) {
          setErrorLogMobile(true)
        } else {
          setErrorLogMobile(false)
        }
      } else {
        alert('Only Numbers are Allowed')
      }
    }

    if (e.target.id === 'shipaddress') {
      const re = /^[#.0-9a-zA-Z\s,-]+$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setShipaddress(e.target.value)
      } else {
        alert('Special Characters Not Allowed')
      }
    }

    if (e.target.id === 'shipLandmark') {
      const re = /^[#.0-9a-zA-Z\s,-]+$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setShipLandmark(e.target.value)
      } else {
        alert('Special Characters Not Allowed')
      }
    }

    if (e.target.id === 'shipEmail') {
      const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      setShipEmail(e.target.value)
      const email = shipEmail
      if (re.test(email)) {
        setShipEmail(e.target.value)
        setEmailErrorFlag(false)
      } else {
        setEmailErrorFlag(true)
      }
    }
  }

  return (
    <div className="mycart--section">
      <div className="cartMainData">
        <div className="">
          {props.items.length === 0
            ? (
            <div className="container">
              <div className="text-center">
                <p className="cartEmptyText">Your Cart is Empty.</p>
                <p className="cartAddText">Please add items to it now</p>
                <div>
                  <Link to="/dashboard">
                    <button className="food--cardAdd food--cardAddShopNow">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
              )
            : (
            <div className="InnerWrapper">
              <div className="cartInfo">
                <div className="container">
                  <div className="cartInfoCret" style={{ fontWeight: '900' }}>
                    Price are Inclusive of all taxes
                  </div>
                </div>
              </div>
              <div className="container Cartcontainer">
                <div
                  className="row cartFlex"
                  style={{ paddingTop: '30px', paddingBottom: '30px' }}
                >
                  <div className="col-md-8 vertivleBar">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChangeSwipe}>
                            <Tab
                              label="Delivery Address"
                              value="1"
                              onClick={handlePreviousCheck}
                            />
                            <Tab
                              label="Payment"
                              value="2"
                              onClick={handlePaymentCheck}
                            />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <div className="BillingData billDetails-Section">
                            <form onSubmit={handleAddressSubmit}>
                              <div className="fieldSets styled-input">
                                <input
                                  id="fullName"
                                  type="text"
                                  className="shipInputBox"
                                  required
                                  autoComplete="OFF"
                                  value={ShipFullName}
                                  onChange={handleDeliveryValidation}
                                />
                                <label
                                  className="inputLable"
                                  htmlFor="fullName"
                                >
                                  Full Name
                                </label>
                                <span></span>
                              </div>

                              <div className="fieldSets styled-input">
                                <input
                                  id="shipaddress"
                                  type="text"
                                  className="shipInputBox"
                                  required
                                  autoComplete="off"
                                  value={shipaddress}
                                  onChange={handleDeliveryValidation}
                                />
                                <label
                                  className="inputLable"
                                  htmlFor="shipaddress"
                                >
                                  Address
                                </label>
                                <span></span>
                              </div>

                              <div className="minFileds">
                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipLandmark"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    value={shipLandmark}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipLandmark"
                                  >
                                    Landmark
                                  </label>
                                  <span></span>
                                </div>
                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipZIP"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    maxLength={6}
                                    value={ZIPvalue}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipZIP"
                                  >
                                    ZIP Code
                                  </label>
                                  <span></span>
                                </div>
                              </div>

                              <div className="minFileds">
                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipCity"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    value={shipCity}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipCity"
                                  >
                                    City
                                  </label>
                                  <span></span>
                                </div>

                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipState"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    value={shipState}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipState"
                                  >
                                    State
                                  </label>
                                  <span></span>
                                </div>
                              </div>

                              <div className="minFileds">
                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipMobile"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    maxLength={10}
                                    value={Mobilevalue}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipMobile"
                                  >
                                    Mobile Number
                                  </label>
                                  <span></span>
                                </div>

                                <div className="fieldSets styled-input">
                                  <input
                                    id="shipEmail"
                                    type="text"
                                    className="shipInputBox"
                                    required
                                    autoComplete="off"
                                    value={shipEmail}
                                    onChange={handleDeliveryValidation}
                                  />
                                  <label
                                    className="inputLable"
                                    htmlFor="shipEmail"
                                  >
                                    Email Address
                                  </label>
                                  <span></span>
                                </div>
                              </div>

                              <div className="animatedBtn">
                                <button
                                  className="btn fourth"
                                  type="reset"
                                  style={{ marginRight: '15px' }}
                                  onClick={handleDeliveryReset}
                                >
                                  Reset
                                </button>
                                <button className="btn fourth" type="submit">
                                  Continue
                                </button>
                              </div>
                            </form>
                          </div>
                        </TabPanel>
                        <TabPanel value="2">
                          <div className="billDetails-Section">
                            <MainScreen />
                          </div>
                        </TabPanel>
                      </TabContext>
                    </Box>
                    <div></div>
                  </div>

                  <div className="col-md-4">
                    <div>
                      <div className="foodCartProductLISTS">
                        {props.items.map((item) => (
                          <div className="row" key={item.foodMenuID}>
                            <div className="col-md-12">
                              <div className="container-Home-CartproDetails">
                                <div className="cartProduct_Name">
                                  <ul style={{ display: 'flex' }}>
                                    <li>
                                      <span>
                                        <img
                                          src={
                                            item.foodMenuProductPreferenceIcon
                                          }
                                          className="foodPreference"
                                          alt=""
                                        />
                                      </span>{' '}
                                    </li>
                                    <li>
                                      <p>{item.foodMenutitle}</p>
                                    </li>
                                  </ul>
                                </div>
                                <div className="foodDetailsCartRight">
                                  <div className="foodDetails--popUp foodDetails--Cart">
                                    <form className="plus-minus">
                                      <div
                                        className="value-button value-buttonDecrease"
                                        id="decreaseCart"
                                        value="Decrease Value"
                                        onClick={() =>
                                          handleSubtractQuantity(
                                            item.foodMenuID
                                          )
                                        }
                                      ></div>
                                      <div className="plusmin">
                                        <input
                                          type="number"
                                          className="valueButtonCart"
                                          id={'numberCart_ ' + item.foodMenuID}
                                          value={item.quantity}
                                          disabled={true}
                                        />
                                      </div>
                                      <div
                                        className="value-button value-buttonIncrease"
                                        id="increaseCart"
                                        value="Increase Value"
                                        onClick={() =>
                                          handleAddQuantity(item.foodMenuID)
                                        }
                                      ></div>
                                    </form>
                                    <div
                                      className="thrashIcon"
                                      onClick={() =>
                                        handleRemove(item.foodMenuID)
                                      }
                                    >
                                      <i className="fa fa-trash"></i>
                                    </div>
                                  </div>
                                  <div className="divCartportal">
                                    <p className="cartProTotal">
                                      <span>
                                        <i className="fa fa-rupee"></i>
                                      </span>
                                      {item.foodProductTotal}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="billDetails-Section">
                            <p className="biilldetailsHeader">Bill Details</p>
                            <p className="billItemsMain">
                              <span className="billItemsT">Item Total</span>
                              <span className="billItemsMainP">
                                <i className="fa fa-rupee"></i>
                                {props.adData.subTotal}
                              </span>
                            </p>
                            <p className="billItemsMain billItemsMainBorder">
                              <span className="billItemsT">
                                Restaurent Charges
                              </span>
                              <span className="billItemsMainP">
                                <i className="fa fa-rupee"></i>
                                {props.adData.restaurentCharges}
                              </span>
                            </p>
                            <p className="billItemsMain billItemsMainBorderTop">
                              <span className="billItemsT">
                                Delivery Charges
                              </span>
                              <span className="billItemsMainP">
                                <i className="fa fa-rupee"></i>
                                {props.adData.deliveryCharges}
                              </span>
                            </p>
                            <p className="billItemsMain billTotalMain">
                              <span className="billItemsT">Total Payment</span>
                              <span className="billItemsMainP">
                                <i className="fa fa-rupee"></i>
                                {Number(props.adData.subTotal) +
                                  Number(props.adData.shippingCharge) +
                                  Number(props.adData.deliveryCharges)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state,
    items: state.addedItems,
    adData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (foodMenuID) => {
      dispatch(addQuantity(foodMenuID))
    },
    subtractQuantity: (foodMenuID) => {
      dispatch(subtractQuantity(foodMenuID))
    },
    removeItem: (foodMenuID) => {
      dispatch(removeItem(foodMenuID))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
