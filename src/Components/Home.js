import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { connect } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import dine from '../Images/dine.svg'
import hygiene from '../Images/hygiene.svg'
import takeAway from '../Images/takeAway.svg'

const _ = require('lodash')

const Home = (props) => {
  const list = _.filter(props.Carousalitems)
  return (
    <div>
      <Carousel
        className="carousal--sec"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        emulateTouch
      >
        {list.map((index, key) => (
          <div className="row carousalRow" key={key}>
            <div className="col-md-7 flex align-items-center position-relative column1--carousalLeft">
              <div className="width-100">
                <h1 className="open_sansbold font-50 color-333333 carousal--header">
                  {index.header}
                </h1>
                <p className="open_sansregular color-2e2e2e font-14 carousal--headerInfo">
                  {index.headerInfo}
                </p>
                <div className="flex paddling-top-30 locateLocation--box">
                  <p
                    className="orderOnlineHome background-primary-yellow border-primary-yellow color-ffffff paddling-top-10 paddling-bottom-10 paddling-left-30 paddling-right-30 learn__more"
                    style={{ cursor: 'pointer' }}
                  >
                    {index.orderOnline}
                  </p>
                  {index.locate
                    ? (
                    <p
                      className="border-primary-yellow color-2e2e2e paddling-top-10 paddling-bottom-10 paddling-left-40 paddling-right-40 locate--location"
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="paddling-left-10">{index.locate}</span>
                    </p>
                      )
                    : null}
                </div>

                <div className="flex justify-content-space-between dine--sections paddling-top-30 paddling-bottom-30">
                  <div className="subBox--main">
                    <div className="subBox--inner">
                      <p className="flex align-items-center lineHeightHeader">
                        <span className="paddling-right-10">
                          <img
                            src={hygiene}
                            alt="Hygiene"
                            className="imghygine"
                          />
                        </span>
                        <span className="font-22 color-2e2e2e open_sanssemibold carousal--subHeader">
                          {index.hyigeneHeader}
                        </span>
                      </p>
                      <p className="color-707070 font-12 textHygine paddling-top-10">
                        {index.hyigeneText}
                      </p>
                    </div>
                  </div>

                  <div className="subBox--main">
                    <div className="subBox--inner">
                      <p className="flex align-items-center lineHeightHeader">
                        <span className="paddling-right-10">
                          <img src={dine} alt="Dine" className="imghygine" />
                        </span>
                        <span className="font-22 color-2e2e2e open_sanssemibold carousal--subHeader">
                          {index.FineDineHeader}
                        </span>
                      </p>
                      <p className="color-707070 font-12 textHygine paddling-top-10">
                        {index.FineDineText}
                      </p>
                    </div>
                  </div>

                  <div className="subBox--main">
                    <div className="subBox--inner">
                      <p className="flex align-items-center lineHeightHeader">
                        <span className="paddling-right-10">
                          <img
                            src={takeAway}
                            alt="Take Away"
                            className="imghygine"
                          />
                        </span>
                        <span className="font-22 color-2e2e2e open_sanssemibold carousal--subHeader">
                          {index.takeAwayHeader}
                        </span>
                      </p>
                      <p className="color-707070 font-12 textHygine paddling-top-10">
                        {index.takeAwayText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 sec-2-Images flex align-items-center justify-content-center">
              <img
                src={index.secImage}
                className="fineDine--Img"
                alt="Fine Dine"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Carousalitems: state.Carousalitems
  }
}

export default connect(mapStateToProps)(Home)
