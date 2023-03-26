import { ExistingLearingEvents } from '../../App'
import { useState, useEffect } from 'react';


export function LeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch('http://localhost:4000/LeExisting', {method: "GET"})
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