import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import FoodDetails from './FoodDetails'

const _ = require('lodash')

const Dashboard = (props) => {
  const [showPopup, setShowPopup] = useState(false)
  const [id, setId] = useState('')
  const [cartValue] = useState('view')

  const LunchList = _.filter(props.Lunchitems)
  const BarList = _.filter(props.Baritems)

  useEffect(() => {
    window.scrollTo(0, 450)
  }, [])

  const togglePopup = (e) => {
    const id = parseInt(e.target.id)
    setShowPopup(!showPopup)
    setId(id)
  }

  const handlePopStatus = (value) => {
    setShowPopup(value)
  }

  const continueOrder = (value) => {
    setShowPopup(value)
  }

  return (
    <div>
      <Home />
      <div
        className="ourStory--section paddling-top-20 paddling-bottom-30"
        id="Delicious---section"
        style={{ height: '400px' }}
      >
        <div className="container">
          <section className="story--dishSectionMenu">
            <div className="story--subHeader-box">
              <h2 className="story--subHeader text-center">LUNCH / DINNER</h2>
              <h1 className="text-center open_sanssemibold color-2e2e2e story--Header">
                Delicious Food Menu
              </h1>
              <span className="border-dotCircle"></span>
            </div>
            <div>
              <p className="story--paraInfo">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="food--menuMainSection">
              <div className="food--cardList">
                {LunchList.map((index, key) => (
                  <div
                    className="food--card"
                    key={index.foodMenuID}
                    id={index.foodMenuID}
                  >
                    <div>
                      <img
                        id={index.foodMenuID}
                        src={index.foodMenuProductImage}
                        alt=""
                        className="food--cardIcon"
                        onClick={togglePopup}
                      />
                      {showPopup && index.foodMenuID === id ? (
                        <FoodDetails
                          showPopup={showPopup}
                          data={index}
                          keyx={index.foodMenuID}
                          popupStaus={handlePopStatus}
                          continueOrder={continueOrder}
                          history={props.history}
                        />
                      ) : null}
                    </div>

                    <div>
                      <ul className="foodPreferenceList">
                        <li>
                          <span>
                            <img
                              src={index.foodMenuProductPreferenceIcon}
                              className="foodPreference"
                              alt=""
                            />
                          </span>
                        </li>
                        <li>
                          <p className="food--cardHeader">
                            {index.foodMenutitle}
                          </p>
                        </li>
                      </ul>

                      <p className="food--cardStarter font-14 open_sansregular color-ccc">
                        {index.foodMenuProductType}
                      </p>
                    </div>
                    <div className="food--cardCartDetails">
                      <div>
                        <span className="food--cardAmount open_sansbold">
                          <span>
                            <i className="fa fa-rupee"></i>
                          </span>
                          {index.foodMenuProductPrice}
                        </span>
                        <span className="food--cardAmountStrike open_sansregular">
                          <span>
                            <i className="fa fa-rupee"></i>
                          </span>
                          {index.foodMenuProductStrikePrice}
                        </span>
                      </div>
                      <span>
                        <button
                          disabled={!!index.foodMenuProductInCart}
                          className="btn food--cardAdd open_sansbold"
                          onClick={togglePopup}
                          id={index.foodMenuID}
                        >
                          {cartValue}
                        </button>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="story--dishSectionMenu">
            <div className="story--subHeader-box">
              <h2 className="story--subHeader text-center">FROM THE BAR</h2>
              <h1 className="text-center open_sanssemibold color-2e2e2e story--Header">
                Delicious Bar Menu
              </h1>
              <span className="border-dotCircle"></span>
            </div>
            <div>
              <p className="story--paraInfo">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="foodMenu--section">
              <div className="foodmenu--stack">
                {BarList.map((index, key) => (
                  <div className="foodMenu BarMenu" key={key}>
                    <div className="foodMenuInfo">
                      <h3 className="foodMenu--title open_sanssemibold color-2e2e2e font-20">
                        {index.barMenutitle}
                      </h3>
                      <p className="foodMenu--productInfo color-2e2e2e open_sansregular font-14">
                        {index.barMenuProductInfo}
                      </p>
                    </div>
                    <div className="foodMenuPrice">
                      <h3 className="foodMenu--productPrice open_sanssemibold color-2e2e2e font-20">
                        ${index.barMenuProductPrice}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Lunchitems: state.cartReducer.Lunchitems,
    Baritems: state.cartReducer.Baritems
  }
}

export default connect(mapStateToProps)(Dashboard)
