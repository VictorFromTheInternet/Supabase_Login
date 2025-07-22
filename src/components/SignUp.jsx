import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const {session, signUpNewUser} = UserAuth()
    const navigate = useNavigate()
    // console.log(session)


    // sign up
    const handleSignUp = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try{
            const result = await signUpNewUser(email, password)

            if(result.success){
                navigate('/dashboard')
            }
        }catch(err){
            setError("an error occured during signup")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div>
            {/* nav section */}            
            <Link to="/">
                <img src="logo.svg" alt="logo" title="logo" className="fixed top-0 left-0 m-4 cursor-pointer" />
            </Link>     
            
            <div className="h-screen flex flex-col justify-center max-w-md m-auto ">
                <form onSubmit={handleSignUp} className="">
                    <h2 className="font-bold pb-2 text-2xl">Sign up today!</h2>
                    <p className="">
                        Already have an account? <Link to='/signin' className="text-blue-500">Sign in!</Link> 
                    </p>

                    <div className="flex flex-col py-4">
                        <input onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Email" type="email" name="email" id="email" 
                            className="p-3 mt-4 bg-gray-100 rounded-sm" />

                        <input onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password" type="password" name="password" id="password" 
                            className="p-3 mt-4 bg-gray-100 rounded-sm" />

                        <button type="submit" disabled={loading} className="mt-4 rounded-sm text-blue-500 border-1 border-blue-500 py-2">Sign Up</button>

                        {error && <p className="text-red-600 text-center pt-4">{error}</p>}
                    </div>
                </form>     
            </div>               
        </div>
    )
}

export default SignUp
