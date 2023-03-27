import { ExistingCodingEvents } from '../../App'
import { useState, useEffect } from 'react';


export function CeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch('http://localhost:4000/CeExisting', {method: "GET"})
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