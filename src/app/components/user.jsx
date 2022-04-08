import React from 'react'
import Qualitie from './qualitie'
import BookMark from './bookmark'

const User = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((item) => (
          <Qualitie color={item.color} name={item.name} key={item._id} />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <td>
        {
          <BookMark
            status={props.bookmark}
            onClick={() => props.onToggle(props._id)}
          />
        }
      </td>
      <td>
        {
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => props.onDelete(props._id)}
          >
            Delete
          </button>
        }
      </td>
    </tr>
  )
}

export default User
