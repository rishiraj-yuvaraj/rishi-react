import { ExistingCodingEvents } from '../../App'
import { useState, useEffect } from 'react';
import { API } from '../../globalApi';

export function CeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch(`${API}/CeExisting`, {method: "GET"})
        .then((data) => data.json())
        .then((urs) => setUserList(urs));
    }
    console.log(getUsers)
    useEffect(() => getUsers(), []);
      
    return(
        <div className='CeExisting-container'>
            {
                userList.map((ur) => (
                    <ExistingCodingEvents user={ur} />
                ))
            }
        </div>
    )
}