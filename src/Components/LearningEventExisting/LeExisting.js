import { ExistingLearingEvents } from '../../App'
import { useState, useEffect } from 'react';
import { API } from '../../globalApi';


export function LeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch(`${API}/LeExisting`, {method: "GET"})
        .then((data) => data.json())
        .then((urs) => setUserList(urs));
    }
    console.log(getUsers)
    useEffect(() => getUsers(), []);
      
    return(
        <div className='LeExisting-container'>
            {
                userList.map((ur) => (
                    <ExistingLearingEvents user={ur} />
                ))
            }
        </div>
    )
}