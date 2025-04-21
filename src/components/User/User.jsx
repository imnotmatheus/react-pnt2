import "./user.css";
import { useState } from "react"

function User(props) {
  // retorna el JSX que luego es interpretado por REACT
  // cada vez que dentro del JSX quiero agregar variables
  // porsiones de javascript tengo que encerrar en {}
const [contador, setContador] = useState(0)

  const handlerUserClick = () => {
    console.log(props.UserName)
    setContador(contador + 1)
  }

  return (
    // Componente Usuario
    <li className="user-item" onClick={handlerUserClick}>
      <div className="card user-item__content">
        <a href="#">
          <div className="user-item__image avatar">
            <img src={props.Picture} />
          </div>
          <div className="user-item__info">
            <h2>Nombre: {props.UserName}</h2>
            <h3>{props.Title}</h3>
            <h3>{contador}</h3>
          </div>
        </a>
      </div>
    </li>
  );
}

export default User;
