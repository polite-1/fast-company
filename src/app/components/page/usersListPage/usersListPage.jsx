import React, { useState, useEffect } from 'react'
import { paginate } from '../../../utils/paginate'
import Pagination from '../../common/pagination'
import PropTypes from 'prop-types'
import GroupList from '../../common/groupList'
import api from '../../../api'
import SearchStatus from '../../ui/searchStatus'
import UserTable from '../../ui/usersTable'
import _ from 'lodash'

const UsersListPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })
  const pageSize = 8
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId))

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf, search])

  const handleProfessionSelect = (item) => {
    if (search !== '') setSearch('')
    setSelectedProf(item)
  }

  const handleSearh = ({ target }) => {
    setSelectedProf(undefined)
    setSearch(target.value)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  /* const filtredUsers = selectedProf
     ? users.filter((user) => user.profession.name === selectedProf.name)
     : users */

  if (users) {
    const filtredUsers = search
      ? users.filter(
          (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) === true
        )
      : selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : users

    const count = filtredUsers.length
    const sortedUsers = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)
    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              onItemSelect={handleProfessionSelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              ????????????????
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <input
            type="text"
            name="search"
            placeholder="?????????????? ?????? ????????????????????????..."
            onChange={handleSearh}
            value={search}
          />
          {count > 0 && (
            <UserTable
              users={userCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return 'loading'
}
UsersListPage.propTypes = {
  users: PropTypes.array
}
export default UsersListPage
