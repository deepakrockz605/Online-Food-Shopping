import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const initialState = {
  title: '',
  productInfo: '',
  discountedPrice: '',
  originalPrice: '',
  productType: 'Starter',
  productCategory: 'Veg'
}

export default function ProductUploadOverlay ({
  open,
  handleOverlayValue,
  handleDataUpload
}) {
  const [file, setFile] = useState()
  const [formData, setFormData] = useState({
    title: '',
    productInfo: '',
    discountedPrice: '',
    originalPrice: '',
    productType: 'Starter',
    productCategory: 'Veg',
    imgPreview: null
  })

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const title = file.name.split('.')[0]
    setFormData({ ...formData, title, imgPreview: URL.createObjectURL(file) })
    setFile(e.target.files[0])
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleClose = () => {
    handleOverlayValue(false)
    setFile(null)
    setFormData(initialState)
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    handleDataUpload(file, formData)
    setFormData(initialState)
  }

  const productCategories = [
    {
      value: 'Veg',
      label: 'Veg',
      name: 'productCategory'
    },
    {
      value: 'Non Veg',
      label: 'Non Veg',
      name: 'productCategory'
    }
  ]

  const productTypes = [
    {
      value: 'Starter',
      label: 'Starter',
      name: 'productType'
    },
    {
      value: 'Main Course',
      label: 'Main Course',
      name: 'productType'
    }
  ]

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="product-dialog"
    >
      <DialogContent>
        <form>
          <div className="center">
            <img src={formData.imgPreview} />
          </div>
          <div className="center margin-top-10">
            <Button variant="contained" component="label" size="small">
              Upload Product
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={handleFileUpload}
              />
            </Button>
          </div>
          <div className="form-group">
            <TextField
              id="product-title"
              label="Title"
              variant="standard"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="product-info"
              label="Product Information"
              variant="standard"
              name="productInfo"
              multiline
              value={formData.productInfo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="discounted-price"
              label="Discounted Price"
              variant="standard"
              type="number"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
            />
            <TextField
              id="original-price"
              label="Original Price"
              variant="standard"
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="product-type"
              select
              label="Product Type"
              defaultValue="Main Course"
              name="productType"
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
              variant="standard"
            >
              {productTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="product-category"
              select
              label="Product Category"
              defaultValue="Main Course"
              name="productCategory"
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
              variant="standard"
            >
              {productCategories.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={(e) => handleAddProduct(e)} autoFocus>
          Add Product
        </Button>
      </DialogActions>
    </Dialog>
  )
}
