import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import api from '../../../api'
import Qualities from '../../ui/qualities'

const UserPage = ({ userId }) => {
  const history = useHistory()
  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])
  const handleClick = () => {
    history.push(`/users/${userId}/edit`)
  }
  if (user) {
    return (
      <div className="m-3">
        <h3>Name: {user.name}</h3>
        <h3>Profession: {user.profession.name}</h3>
        <h3>
          Qualities: <Qualities qualities={user.qualities} />
        </h3>
        <h3>Complete Mettings: {user.completedMeetings}</h3>
        <h3>Rate: {user.rate}</h3>
        <button onClick={handleClick} className="btn btn-primary">
          Изменить
        </button>
      </div>
    )
  } else {
    return <h2>Loading...</h2>
  }
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}
export default UserPage
