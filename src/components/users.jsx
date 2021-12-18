import React, { useState, useEffect } from 'react'
import api from '../api/index'
import SearchStatus from './searchStatus'
import User from './user'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import PropTypes from 'prop-types'
/* eslint-disable */
const Users = () => {
    const [users, setUsers] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()

    const pageSize = 2
    const [selectedProf, setSelectedProf] = useState()

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId))
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession === selectedProf)
        : users

    const count = filteredUsers.length

    const userCrop = paginate(filteredUsers, currentPage, pageSize)

    if (userCrop.length === 0) {
        handlePageChange(currentPage - 1)
    }


    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }
    const clearFilter = () => {
        setSelectedProf()
    }

    if (!count) return (
        <>
            <div>no</div>
        </>
    );

    if (count < 1) {
        return (
            <span className="badge bg-danger m-2">
                Никто с тобой не тусанет
            </span>
        )
    } else {
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus props={count} />
                    {count > 0 && (
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <User
                                users={userCrop}
                                onDelete={handleDelete}
                            />
                            </tbody>
                        </table>
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
}

export default Users