import React, { useState, useEffect } from 'react'
import { uploadProduct, fetchProducts } from '../../../services/auth'
import { ToastContainer, toast } from 'react-toastify'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import FoodProductsList from './FoodProductsList'
import ProductUploadOverlay from './ProductUploadOverlay'
import FootballLoader from '../../../Common/FootballLoader'
import './Product.scss'

export default function Products () {
  const [open, setOpen] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const [productsData, setProductsData] = useState([])
  const [editedProduct, setEditedProduct] = useState({})

  const userDetails = JSON.parse(localStorage.getItem('userData'))

  const handleProductOverlay = () => {
    setOpen(true)
  }

  const handleOverlayValue = (val, editedProduct) => {
    setOpen(val)
    setEditedProduct(editedProduct)
  }

  const handleDataUpload = async (file, userData) => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('title', userData.title)
    formData.append('productInfo', userData.productInfo)
    formData.append('originalPrice', userData.originalPrice)
    formData.append('discountedPrice', userData.discountedPrice)
    formData.append('productType', userData.productType)
    formData.append('productCategory', userData.productCategory)
    setIsLoader(true)
    uploadProduct(formData, userDetails.token).then((res) => {
      setIsLoader(false)
      setOpen(false)
      setEditedProduct({})
      if (res && res.success) {
        handleFetchProducts()
        toast.success(res.message)
      } else {
        toast.error(res.err || res.message)
      }
    })
  }

  const handleFetchProducts = () => {
    fetchProducts(userDetails.token).then((res) => {
      if (res && res.success) {
        setProductsData(res.result)
        setIsLoader(false)
      }
    })
  }

  useEffect(() => {
    setIsLoader(true)
    handleFetchProducts()
  }, [])
  return (
    <div className="margin-top-70">
      <ToastContainer />
      {isLoader ? (
        <div className="loader-resto">
          <div className="loader">
            <FootballLoader />
          </div>
        </div>
      ) : null}
      <div className="container paddling-top-20">
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleProductOverlay}
        >
          Add Food Product
        </Button>
        <FoodProductsList productsData={productsData} handleOverlayValue={handleOverlayValue} />
        <ProductUploadOverlay
          open={open}
          handleOverlayValue={handleOverlayValue}
          handleDataUpload={handleDataUpload}
          editedProduct={editedProduct}
        />
      </div>
    </div>
  )
}
