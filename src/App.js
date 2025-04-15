import User from "./components/User";

function App() {
  return (
    <div>
      <h3>Pagina de inicio</h3>
      <User nombre={"Ana"} apellido={"Termignoni"}/>
      <User nombre={"Matheus"} apellido={"Reguta"}/>
    </div>
  );
}

export default App;
