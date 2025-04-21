import User from "./User";
import users from "../moc/users"
import "./user.css";


export default function UserList() {
  // TODO: Iterar por todos los usuarios que estan en moc/user.js
  // este componente va mostrar a todos los usuarios.
  console.log("Cant usuarios", users.length)
  return (
    <ul className="users-list">
      { users.map(u =>
        <User
          UserName={u["Display name"]}
          Picture={`./img/${u["Display name"]}.jpg`}
          Title={u.Title}
          key={u["Object Id"]}
        />
      )}
    </ul>
  );
}
