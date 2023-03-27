import { ExistingInterviewPreparationEvents } from '../../App'
import { useState, useEffect } from 'react';


export function IpeExisting() {
    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        fetch('http://localhost:4000/IpeExisting', {method: "GET"})
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