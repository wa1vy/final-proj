import React, {useState} from 'react';
import api from '../api/index'

const Users = () => {
    const badge = 'badge m-2 '
    const [users, setUsers] = useState(api.users.fetchAll())
    const getBadgeClasses=(clr)=>{
        let classes = badge + 'bg-' + clr
        return classes
    }
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id!==userId))
    }
    const renderTable = () => {
        return users.map(user =>
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                    {user.qualities.map(quality =>
                    <span className={getBadgeClasses(quality.color)} key={quality._id}>{quality.name}</span>)}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td>
                    <button
                        className='btn btn-danger'
                        onClick={()=>handleDelete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        )
    }
    const handlePhrase = (number) => {
        const text_forms = ['человек', 'человека']
        const n = Math.abs(number) % 100
        const n1 = n % 10
        if (n > 10 && n < 20) {
            return (
                <span className='badge bg-primary m-2' >{number} {text_forms[0]} тусанут с тобой сегодня</span>
            )
        }
        if (n1 > 1 && n1 < 5) {
            return (
                <span className='badge bg-primary m-2' >{number} {text_forms[1]} тусанут с тобой сегодня</span>
            )
        }
       if (n1 === 1) {
           return (
               <span className='badge bg-primary m-2' >{number} {text_forms[0]} тусанет с тобой сегодня</span>
           )
       }
            return (
                <span className='badge bg-primary m-2' >{number} {text_forms[0]} тусанут с тобой сегодня</span>
        )
    }
    if (users.length < 1){
        return (
            <span className='badge bg-danger m-2' >Никто с тобой не тусанет</span>
        )
    }else{
        return (
            <>
                {handlePhrase(users.length)}
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
                        {renderTable()}
                    </tbody>
                </table>
            </>
        );
    }

};

export default Users;
