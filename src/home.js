import { useSelector } from "react-redux"
function Home (){
    const newUsername = useSelector((state)=> state.user.value.username)

    return (
        <>
        <h1>This is Home page {newUsername}</h1>
        </>
    )
}
export default Home