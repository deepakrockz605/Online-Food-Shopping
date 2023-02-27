import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

const FoodDetails = (props) => {
  const [id] = useState("");
  const [productDetail, setProductDetail] = useState({});
  const [productPrice, setProductPrice] = useState(0);
  const [buttonCartStatus] = useState(true);
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false)
  const [addcart, setAddcart] = useState("Add To Cart");

  const navigate = useNavigate();

  const handleClick = (keyx) => {
    if (addcart === "Add To Cart") {
      setAddcart("Go To Cart");
      props.addToCart(keyx);

      if (buttonCartStatus === false) {
        var pprice = getProductPrice();
        setProductPrice(pprice);
      }
    } else {
      navigate("/cart");
    }
  };

  const handleBuyNow = () => {
    props.continueOrder(false);
  };

  const getProductPrice = () => {
    var product = productDetail;
    return Number(product.foodMenuProductPrice);
  };

  const handlePopStatus = (value) => {
    props.popupStaus(false);
  };

  useEffect(() => {
    setProductDetail(props.data);
    setProductPrice(Number(props.data.foodMenuProductPrice));
    checkIsItemAlreadyAdded(props.data)
  }, []);

  const checkIsItemAlreadyAdded = (selectedItem) => {
    const {items} = props;
    if(items.length) {
        const isAlreadyAdded = items.filter((item) => item.foodMenuID === selectedItem.foodMenuID);
        isAlreadyAdded.length &&  setAddcart("Go To Cart");
    }
  }

  return (
    <div>
      {props.showPopup ? (
        <div className="foodDetails--popUp" key={props.keyx} id={props.keyx}>
          <div className="foodDetails--Main">
            <div className="foodcart--Image">
              <img
                src={require("../Images/food.png")}
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
                  {id === "half" ? (
                    <p className="addedAmount">
                      <sup>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                      </sup>
                      <span style={{ paddingLeft: "3px" }}>{productPrice}</span>
                      /-
                    </p>
                  ) : (
                    <p className="addedAmount">
                      <sup>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                      </sup>
                      <span style={{ paddingLeft: "3px" }}>{productPrice}</span>
                      /-
                    </p>
                  )}
                </div>

                <div className="foodDetails--cartButton">
                  <button
                    className="foodDetails--addTocart"
                    onClick={() => {
                      handleClick(props.keyx);
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
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Lunchitems: state.Lunchitems,
    Baritems: state.Baritems,
    StateData: state.Lunchitems,
    adData: state,
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (keyx) => {
      dispatch(addToCart(keyx));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
