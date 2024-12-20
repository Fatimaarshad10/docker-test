import { useSelector } from "react-redux"
function Contact (){
    const newUsername = useSelector((state)=> state.user.value.username)

    return (
        <>
        <h1>This is Contact page {newUsername}</h1>
        </>
    )
}
export default Contact