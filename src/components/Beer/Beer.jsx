import { useState } from "react";
import "./beerCard.css";
import Cabecera from "../Cabecera/Cabecera";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
//import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Beer(props) {
  // TODO: Agregar boton comprar, cada vez que se presiona incrementa el contador del
  // componente de Carrito
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  

  return (
    <div className="beer-card">
      <div className="beer-card-image-container">
        <img
          src={props.label}
          alt={`Etiqueta de ${props.name}`}
          className="beer-card-image"
        />
        {/* <button
          className={`heart-button ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-label={liked ? "Quitar Me gusta" : "Dar Me gusta"}
        >
          <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
        </button> */}
      </div>
      <div className="beer-card-content">
        <h3 className="beer-card-title">{props.name}</h3>
        <p className="beer-card-type">{props.type}</p>
        <p className="beer-card-abv">ABV: {props.abv}%</p>
        <button className="buy-button" onClick={props.onComprar}>Comprar</button>
      </div>
    </div>
  );
}

export default Beer;
