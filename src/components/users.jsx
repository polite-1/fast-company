import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const getBadgeClasses = () => {
    let classes = 'badge font-size: 20px m-2 '
    classes += users.length === 0 ? 'bg-danger' : 'bg-primary'
    return classes
  }
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }
  const renderPhrase = (number) => {
    return (number =
      number === 0
        ? 'Ни кто с тобой не тусуется'
        : number !== 12 &&
          number !== 13 &&
          number !== 14 &&
          number % 10 >= 2 &&
          number % 10 <= 4
        ? `${number} человека тусунут с тобой сегодня`
        : `${number} человек тусунет с тобой сегодня`)
  }
  if (users.length === 0) {
    return (
      <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
    )
  }

  return (
    <>
      <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item) => (
                  <span className={'badge m-1 bg-' + item.color} key={item._id}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
