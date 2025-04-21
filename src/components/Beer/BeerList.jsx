import beers from "../moc/beers"
import Beer from "./Beer"

const BeerList = () => {
    console.log("Cant beers:", beers.length)
    return (
    <ul>
        { beers.map(b =>
            <Beer label={b.label} name={b.name} type={b.type} abv={b.abv} key={b.name}/>
        ) }
    </ul>)
}

export default BeerList