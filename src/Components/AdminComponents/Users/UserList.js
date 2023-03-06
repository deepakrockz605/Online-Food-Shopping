import React, { useEffect, useState } from 'react'
import { fetchUsers, deleteUser } from '../../../services/auth'
import FootballLoader from '../../../Common/FootballLoader'
import DataTable from 'react-data-table-component'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const UserList = () => {
  const [isLoader, setIsLoader] = useState(false)
  const [userData, setUserData] = useState([])
  const [pending, setPending] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = (e, id) => {
    e.preventDefault()
    setOpen(true)
    setSelectedUser(id)
  }

  const navigate = useNavigate()

  const userDetails = JSON.parse(localStorage.getItem('userData'))

  const userColumns = () => {
    const columns = [
      {
        name: 'Name',
        selector: (row) => row.name,
        sortable: true
      },
      {
        name: 'Username',
        selector: (row) => row.username,
        sortable: true
      },
      {
        name: 'Email',
        selector: (row) => row.email,
        sortable: true
      },
      {
        name: 'Edit',
        selector: (row) => row.edit
      },
      {
        name: 'Delete',
        selector: (row) => row.delete
      }
    ]
    return columns
  }

  const userDataRow = (userData) => {
    const rows = userData.map((user) => {
      return {
        id: user.UserID,
        name: user.FirstName + ' ' + user.LastName,
        username: user.UserName,
        email: user.Email,
        edit: (
          <Button variant="outlined" size="small" startIcon={<EditIcon />}>
            Edit
          </Button>
        ),
        delete: (
          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={(e) => handleClickOpen(e, user.UserID)}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        )
      }
    })
    return rows
  }

  const handleDeleteUser = (e) => {
    e.preventDefault()
    setOpen(false)
    setIsLoader(true)
    deleteUser(userDetails.token, selectedUser).then((res) => {
      if (res && res.success) {
        setIsLoader(false)
        setUserData(res.result)
        toast.success('User Deleted !!')
      }
    })
  }

  useEffect(() => {
    setIsLoader(true)
    fetchUsers(userDetails.token).then((res) => {
      if (res && res.success) {
        const timeout = setTimeout(() => {
          setIsLoader(false)
          setUserData(res.result)
          setPending(false)
        }, 1000)
        return () => clearTimeout(timeout)
      }
    })
  }, [])

  return (
    <div className="margin-top-70">
      {isLoader ? (
        <div className="loader-resto">
          <div className="loader">
            <FootballLoader />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="users-list position-relative">
            <ToastContainer />
            {userData.length ? (
              <div className="users-table">
                <h3 className="center">Users List</h3>
                <DataTable
                  columns={userColumns(userData)}
                  data={userDataRow(userData)}
                  progressPending={pending}
                  pagination
                  selectableRows
                  dens
                />
              </div>
            ) : (
              <span>No Records found</span>
            )}
            <Button
              className="btn-addUser"
              variant="contained"
              size="small"
              startIcon={<PersonAddAltIcon />}
              onClick={() => navigate('/admin/add-user')}
            >
              Add User
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Do you really want to delete the selected user?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleDeleteUser} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserList
