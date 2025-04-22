import UserList from "./UserList"
import { useState, useEffect } from "react"

const UserPage = (props) => {
    const [users, setUsers] = useState([])
    // se podría utilizar también axios, pero fetch es nativo y no requiere ninguna dependencia
    // useEffect para que se ejecute inmediatamente después de cargar el componente
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/refs/heads/main/src/data/Users.json")
        .then(response => response.json())
        .then(data => {
            setUsers(data)
        })
        .catch( error => console.log(error))
    }, [])

    return (
        <div>
            <UserList users={users}/>
        </div>
    )
}

export default UserPage