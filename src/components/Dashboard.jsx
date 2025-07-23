import React from 'react'
import {useEffect, useState} from 'react'
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

import { Grid } from 'gridjs-react'

function Dashboard() {
    const [users, setUsers] = useState([])    
    
    const {session, signOutUser} = UserAuth()
    const navigate = useNavigate()

    // console.log(session)

    const handleSignOut = async (e) =>{
        e.preventDefault()

        try{
            await signOutUser()

            navigate('/')
        }catch(err){
            console.error(err)
        }
    }
    
    // fetch dummy data
    useEffect(()=>{
        const getDummyData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            console.log(data)

            setUsers(data) 
        }
        getDummyData()

    },[])

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Welcome, {session?.user?.email}</h2>
            <button onClick={handleSignOut} >Sign Out</button>

            {/* gridjs */}
            <Grid
                data={                    
                    users.map((elm)=>{
                        return( [elm.id, elm.name, elm.username, elm.email, elm.phone, elm.website])
                    })
                }
                columns={['ID', 'Name', 'Username', 'Email', 'Phone', 'Website']}
                search={true}
                pagination={{
                    limit: 5,
                }}
                />
        </>
    )
}

export default Dashboard
