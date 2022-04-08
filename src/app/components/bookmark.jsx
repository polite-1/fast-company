import React from "react"
import PropTypes from "prop-types"

const BookMark = ({ status, ...rest }) => {
  const fill = status === false ? " icon" : "-fill"

  return <i className={"bi bi-bookmark" + fill} {...rest}></i>
}
BookMark.propTypes = {
  status: PropTypes.bool.isRequired
}
export default BookMark
