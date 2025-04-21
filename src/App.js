import "./App.css";
import UserList from "./components/User/UserList";
import BeerList from "./components/Beer/BeerList"

function App() {
  return (
    <div>
      <h3>Pagina de inicio</h3>
      <br />
      <UserList />
      <BeerList />
    </div>
  );
}

export default App;
