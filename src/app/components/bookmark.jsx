import React from 'react'

const BookMark = ({ status, ...rest }) => {
  const fill = status === false ? ' icon' : '-fill'

  return <i className={'bi bi-bookmark' + fill} {...rest}></i>
}

export default BookMark
