import React from 'react'
import {useEffect, useState} from 'react'
import {UserAuth} from '../context/AuthContext'
import {useNavigate, Link} from 'react-router-dom'
import "gridjs/dist/theme/mermaid.css"

import { Grid, _ } from 'gridjs-react'

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
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()

            console.log(data)

            setUsers(data) 
        }
        getDummyData()

    },[])

    // edit
    function handleEdit(){
        window.alert("Edit")
    }

    // delete
    function handleDelete(){
        window.alert("Delete")
    }

    return (
        <>
            <nav className="flex justify-between fixed top-0 w-lvw items-center">
                <Link to="/">
                    <img src="logo.svg" alt="logo" title="logo" className="  m-4 cursor-pointer" />
                </Link>  

                <h1 className=" m-4 right-1/2 text-3xl" >Dashboard</h1>

                
                {/* <h2 >
                    Welcome, {session?.user?.email}
                </h2> */}
                <button onClick={handleSignOut} 
                    className="text-blue-500 cursor-pointer py-2 px-6 border-1 border-blue-500 rounded-4xl m-4">
                        Sign Out
                </button>
                     
            </nav>                   


            <div className="max-w-4xl ml-auto mr-auto pt-24 h-screen">
                {/* gridjs */}
                <Grid
                    data={                    
                        users.map((elm)=>{
                            return( [elm.userId, elm.id, elm.title, `${elm.completed? "Yes":"No"}`, _(
                                <div className="flex justify-around items-center gap-2">
                                    <button 
                                    onClick={()=>window.alert("Edit btn clicked")}
                                    className="text-blue-500 border-1 border-blue-500 py-2 px-4 rounded-sm cursor-pointer" >
                                        Edit
                                    </button>
                                    
                                    <button 
                                    onClick={()=>window.alert("Delete btn clicked")}
                                    className="text-red-500 border-1 border-red-500 py-2 px-4 rounded-sm cursor-pointer">
                                        Delete
                                    </button>
                                </div>
                            )])
                        })
                    }
                    columns={['User ID', 'Task ID', 'Title', 'Completed', 'Actions']}
                    search={true}
                    resizable={true}
                    sortable={true}
                    pagination={{
                        limit: 5,
                    }}
                    />
                
                <p>
                    Data from: <a href="https://jsonplaceholder.typicode.com/" className="text-blue-500">JSON Placeholder</a>
                </p>
            </div>                        
        </>
    )
}

export default Dashboard
