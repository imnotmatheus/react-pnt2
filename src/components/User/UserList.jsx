import User from "./User";
import users from "../moc/users"
import "./user.css";

const userInfo = (u) => {
  <User
    UserName={u["Display Name"]}
    Picture={`./img/${u["Display Name"]}.jpg`}
    Title={u.Title}
  />
}

export default function UserList() {
  // TODO: Iterar por todos los usuarios que estan en moc/user.js
  // este componente va mostrar a todos los usuarios.
  return (
    <ul className="users-list">
      { users.forEach(u => userInfo(u)) }
    </ul>
  );
}
