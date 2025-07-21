import React from 'react'
import {useEffect, useState} from 'react'
import {UserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

function Dashboard() {
    const [users, setUsers] = useState()    
    
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
        <div>
        <h1>Dashboard</h1>
        <h2>Welcome, {session?.user?.email}</h2>
        <button onClick={handleSignOut} >Sign Out</button>

        
        </div>
    )
}

export default Dashboard
