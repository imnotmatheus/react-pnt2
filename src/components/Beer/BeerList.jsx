import Beer from "./Beer";
import beers from "../moc/beers.js";

function BeerList(props) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {beers.map((beer, index) => (
        <Beer
          key={index}
          name={beer.name}
          abv={beer.abv}
          label={beer.label}
          type={beer.type}
          onComprar={props.onComprar}
        />
      ))}
    </div>
  );
}

export default BeerList;
