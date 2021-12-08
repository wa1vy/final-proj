import React, {useState} from 'react';
import api from '../api/index'
import SearchStatus from "./searchStatus";
import User from "./user";
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    if (users.length < 1) {
        return (
            <span className='badge bg-danger m-2'>Никто с тобой не тусанет</span>
        )
    } else {
        return (
            <>
                <SearchStatus props={users.length}/>
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
                        users={users}
                        onDelete={handleDelete}
                    />
                    </tbody>
                </table>
            </>
        );
    }

};

export default Users;
