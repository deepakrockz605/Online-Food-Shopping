import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'

const FoodDetails = ({
  data,
  items,
  addToCart,
  continueOrder,
  popupStaus,
  showPopup,
  keyx
}) => {
  const [id] = useState('')
  const [productDetail, setProductDetail] = useState({})
  const [productPrice, setProductPrice] = useState(0)
  const [buttonCartStatus] = useState(true)
  const [addcart, setAddcart] = useState('Add To Cart')

  const navigate = useNavigate()

  const handleClick = (keyx) => {
    if (addcart === 'Add To Cart') {
      setAddcart('Go To Cart')
      addToCart(keyx)

      if (buttonCartStatus === false) {
        const pprice = getProductPrice()
        setProductPrice(pprice)
      }
    } else {
      navigate('/cart')
    }
  }

  const handleBuyNow = () => {
    continueOrder(false)
  }

  const getProductPrice = () => {
    const product = productDetail
    return Number(product.foodMenuProductPrice)
  }

  const handlePopStatus = (value) => {
    popupStaus(false)
  }

  useEffect(() => {
    setProductDetail(data)
    setProductPrice(Number(data.foodMenuProductPrice))
    const checkIsItemAlreadyAdded = (selectedItem) => {
      if (items.length) {
        const isAlreadyAdded = items.filter(
          (item) => item.foodMenuID === selectedItem.foodMenuID
        )
        isAlreadyAdded.length && setAddcart('Go To Cart')
      }
    }
    checkIsItemAlreadyAdded(data)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {showPopup
        ? (
        <div className="foodDetails--popUp" key={keyx} id={keyx}>
          <div className="foodDetails--Main">
            <div className="foodcart--Image">
              <img
                src={require('../Images/food.png')}
                alt=" "
                className="popupImage"
              />
            </div>
            <div className="foodcart--productDetails">
              <p className="foodMenu--productInfo color-2e2e2e open_sansregular font-14">
                {productDetail.foodMenutitle}
              </p>
              <p className="foodMenu--subproductInfo color-2e2e2e open_sansregular font-14">
                {productDetail.foodMenuProductInfo}
              </p>

              <div>
                <div>
                  {id === 'half'
                    ? (
                    <p className="addedAmount">
                      <sup>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                      </sup>
                      <span style={{ paddingLeft: '3px' }}>{productPrice}</span>
                      /-
                    </p>
                      )
                    : (
                    <p className="addedAmount">
                      <sup>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                      </sup>
                      <span style={{ paddingLeft: '3px' }}>{productPrice}</span>
                      /-
                    </p>
                      )}
                </div>

                <div className="foodDetails--cartButton">
                  <button
                    className="foodDetails--addTocart"
                    onClick={() => {
                      handleClick(keyx)
                    }}
                  >
                    <span className="paddling-right-10">
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                    {addcart}
                  </button>
                  <button
                    className="foodDetails--buyNow"
                    onClick={handleBuyNow}
                  >
                    <span className="paddling-right-10">
                      <i className="fa fa-angle-double-right"></i>
                    </span>
                    Continue Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="foodDetails--popUpParent"
            onClick={handlePopStatus}
          ></div>
        </div>
          )
        : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.addedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (keyx) => {
      dispatch(addToCart(keyx))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
