import { useState } from "react"
import { useDispatch  , useSelector} from "react-redux"
import { login , logout } from "./store"
function Login (){
    const [ username , setUsername] = useState("")
    const dispatch = useDispatch()
    const newUsername = useSelector((state)=> state.user.value.username)
    return (
        <>
        <h1>{newUsername}</h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
        <button onClick={()=> dispatch(login({username : username}))}>Login</button>
        <button onClick={()=>dispatch(logout())}>Logout</button>

        </>
    )
}
export default Login