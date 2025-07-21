import {createContext, useEffect, useState, useContext} from 'react'
import {supabase} from '../supabaseClient'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)
    // console.log(session)

    // signup
    const signUpNewUser = async (email, password) =>{
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if(error){
            console.error("There was an error: ", error)
            return {success:false, error}
        }

        return {success: true, data}
    }


    // init auth session and update state
    useEffect(()=>{
        // init state
        supabase.auth.getSession().then(({data: {session}})=>{
            setSession(session)
        })

        // update state
        supabase.auth.onAuthStateChange((_event, session)=>{
            setSession(session)
        })
    },[])


    // sign in
    const signInUser = async (email, password) =>{
        try{
            const {data,error} = await supabase.auth.signInWithPassword({
                email:email,
                password: password
            })

            if(error){
                console.error("There was an error: ", error)
                return {success:false, error}
            }

            return {success: true, data}

        }catch(error){
            console.error(error)
        }
    }


    // signout
    const signOutUser = async () =>{
        const {error} = await supabase.auth.signOut()

        if(error){
            console.error("There was an error signing out: ",error)
        }
    }


    return(
        <AuthContext.Provider value={{session, signUpNewUser, signOutUser, signInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}