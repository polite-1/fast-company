import React from 'react'
import { useParams } from 'react-router-dom'
import UserEditPage from '../components/page/userEdit'

const EditUser = () => {
  const params = useParams()
  const { userId } = params
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Edit User</h3>
          <UserEditPage userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default EditUser
