import "./App.css";
import UserList from "./components/User/UserList";
import BeerList from "./components/Beer/BeerList"
import UserPage from "./components/User/UserPage";
import Cabecera from "./components/Cabecera/Cabecera";
import PieDePagina from "./components/Pie/PieDePagina"
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState(0);

  const handleComprar = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className="App">
      <Cabecera carrito={carrito} />
      <main style={{ padding: "24px" }}>
        <BeerList onComprar={handleComprar} />
      </main>
    </div>
  );
}

export default App