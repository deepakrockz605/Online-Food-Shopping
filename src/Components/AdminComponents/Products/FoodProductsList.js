import React from 'react'
import { baseURL } from '../../../services/index'
import nonVegImg from '../../../Images/non-vegetarian-food-symbol.png'
import vegImg from '../../../Images/vegetarian-food-symbol.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

const FoodProductsList = ({ productsData, handleOverlayValue }) => {
  const handleEditProduct = (product) => {
    handleOverlayValue(true, product)
  }
  return (
    <section>
      <div className="food--menuMainSection admin-foodsection">
      <div className="food--cardList">
        {productsData && productsData.length ? (
          productsData.map((product) => {
            return <div className="food--card" key={product.Id}>
              <div>
                <img
                        id={product.Id}
                        src={`${baseURL}/${product.File}`}
                        alt={product.Title}
                        className="food--cardIcon"
                        onClick={() => handleEditProduct(product)}
                      />
              </div>

              <div>
                <ul className="foodPreferenceList">
                  <li>
                    <span>
                      <img
                              src={product.Category === 'Veg' ? vegImg : nonVegImg}
                              className="foodPreference"
                              alt=""
                            />
                    </span>
                  </li>
                  <li>
                    <p className="food--cardHeader">{product.Title}</p>
                  </li>
                </ul>
                <p className="food--cardHeader">
                  Availeble: { ' ' } {product.Availability ? <CheckCircleIcon color='success' /> : <CancelIcon color='error' />}
                </p>

                <p className="food--cardStarter font-14 open_sansregular color-ccc">
                  {product.ProductType}
                </p>
              </div>
              <div className="food--cardCartDetails">
                <div>
                  <span className="food--cardAmount open_sansbold">
                    <span>
                      <i className="fa fa-rupee"></i>
                    </span>
                    {product.Price}
                  </span>
                  <span className="food--cardAmountStrike open_sansregular">
                    <span>
                      <i className="fa fa-rupee"></i>
                    </span>
                    {product.StrikePrice}
                  </span>
                </div>
                <span>
                  <button
                    className="btn food--cardAdd open_sansbold"
                      onClick={() => handleEditProduct(product)}
                      id={product.ProductType}
                  >
                    {'Edit'}
                  </button>
                </span>
              </div>
            </div>
          })
        ) : (
          <div>
            No products to display. Please click on the <b>Add Food Product</b>{' '}
            button to add to the list
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default FoodProductsList
