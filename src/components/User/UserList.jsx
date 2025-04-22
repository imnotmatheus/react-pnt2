import User from "./User";
//import users from "../moc/users"
import "./user.css";


const UserList= (props) => {
  // TODO: Iterar por todos los usuarios que estan en moc/user.js
  // este componente va mostrar a todos los usuarios.
  return (
    <ul className="users-list">
      { props.users.map(u =>
        <User
          UserName={u["Display name"]}
          Picture={u.Picture}
          Title={u.Title}
          key={u["Object Id"]}
        />
      )}
    </ul>
  );
}

export default UserList