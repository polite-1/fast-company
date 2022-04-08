import React from "react"
import Qualitie from "./qualitie"
import BookMark from "./bookmark"
import PropTypes from "prop-types"

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
User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default User
