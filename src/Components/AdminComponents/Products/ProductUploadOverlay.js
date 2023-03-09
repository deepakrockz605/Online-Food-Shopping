import React, { useState, useEffect } from 'react'
import { baseURL } from '../../../services/index'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const initialState = {
  Title: '',
  Info: '',
  Price: '',
  StrikePrice: '',
  ProductType: 'Starter',
  Category: 'Veg',
  Availability: 'Yes'
}

export default function ProductUploadOverlay ({
  open,
  handleOverlayValue,
  handleDataUpload,
  editedProduct
}) {
  const [file, setFile] = useState()
  const [formData, setFormData] = useState({
    Title: '',
    Info: '',
    Price: '',
    StrikePrice: '',
    ProductType: 'Starter',
    Category: 'Veg',
    File: null,
    Availability: 'Yes'
  })

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    const Title = file.name.split('.')[0]
    setFormData({ ...formData, Title, File: URL.createObjectURL(file) })
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
    handleDataUpload(file, formData, editedProduct && editedProduct.Id)
    setFormData(initialState)
  }

  useEffect(() => {
    if (open && editedProduct && editedProduct.Id) {
      const file = `${baseURL}/${editedProduct.File}`
      setFormData({ ...editedProduct, Availability: editedProduct.Availability === 1 ? 'Yes' : 'No', File: file })
    }
  }, [open])

  const productCategories = [
    {
      value: 'Veg',
      label: 'Veg'
    },
    {
      value: 'Non Veg',
      label: 'Non Veg'
    }
  ]

  const Availability = [
    {
      value: 'Yes',
      label: 'Yes'
    },
    {
      value: 'No',
      label: 'No'
    }
  ]

  const ProductTypes = [
    {
      value: 'Starter',
      label: 'Starter'
    },
    {
      value: 'Main Course',
      label: 'Main Course'
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
            <img src={formData.File} />
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
              name="Title"
              value={formData.Title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="product-info"
              label="Product Information"
              variant="standard"
              name="Info"
              multiline
              value={formData.Info}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              id="discounted-price"
              label="Discounted Price"
              variant="standard"
              type="number"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
            />
            <TextField
              id="original-price"
              label="Original Price"
              variant="standard"
              type="number"
              name="StrikePrice"
              value={formData.StrikePrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <TextField
              id="availability"
              select
              label="Availability"
              value={formData.Availability}
              name="Availability"
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
              variant="standard"
            >
              {Availability.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>
          <div className="form-group">
            <TextField
              id="product-type"
              select
              label="Product Type"
              value={formData.ProductType}
              name="ProductType"
              onChange={handleChange}
              SelectProps={{
                native: true
              }}
              variant="standard"
            >
              {ProductTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="product-category"
              select
              label="Product Category"
              name="Category"
              onChange={handleChange}
              value={formData.Category}
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
          {editedProduct && editedProduct.Id ? 'Update Product' : 'Add Product' }
        </Button>
      </DialogActions>
    </Dialog>
  )
}
