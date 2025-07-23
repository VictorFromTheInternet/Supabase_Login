import React from 'react'
import {useEffect, useState} from 'react'
import {UserAuth} from '../context/AuthContext'
import {useNavigate, Link} from 'react-router-dom'
import "gridjs/dist/theme/mermaid.css"

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
            <nav className="flex justify-between fixed top-0 w-lvw items-center">
                <Link to="/">
                    <img src="logo.svg" alt="logo" title="logo" className="  m-4 cursor-pointer" />
                </Link>  

                <h1 className=" m-4 right-1/2 text-2xl" >Dashboard</h1>

                <div className=" m-4">
                    {/* <h2 >
                        Welcome, {session?.user?.email}
                    </h2> */}
                    <button onClick={handleSignOut} 
                        className="text-blue-500 cursor-pointer py-2 px-6 border-1 border-blue-500 rounded-4xl">
                            Sign Out
                    </button>
                </div>     
            </nav>                   


            <div className="max-w-4xl ml-auto mr-auto pt-24 h-screen">
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
            </div>            
        </>
    )
}

export default Dashboard
