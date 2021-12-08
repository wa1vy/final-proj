import React from 'react';
import Quality from "./quality";
import Bookmark from "./bookmark";
const User = (props) => {


    return props.users.map(user =>
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                <Quality
                    quality={user.qualities}
                />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <Bookmark/>
            </td>
            <td>
                <button
                    className='btn btn-danger'
                    onClick={() => props.onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    )

};

export default User;
