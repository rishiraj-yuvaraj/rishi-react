import { ExistingInterviewPreparationEvents } from '../../App'
import { useState, useEffect } from 'react';
import { API } from '../../globalApi';

export function IpeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch(`${API}/IpeExisting`, {method: "GET"})
        .then((data) => data.json())
        .then((urs) => setUserList(urs));
    }
    console.log(getUsers)
    useEffect(() => getUsers(), []);
      
    return(
        <div className='IpeExisting-container'>
            {
                userList.map((ur) => (
                    <ExistingInterviewPreparationEvents user={ur} />
                ))
            }
        </div>
    )
}