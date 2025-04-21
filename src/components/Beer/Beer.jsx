const Beer = (props) => {
    return (
        <li>
            <div>
                <img src={props.label} alt={props.name} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <h4>Type: {props.type}</h4>
                <h4>ABV: {props.abv}</h4>
            </div>
        </li>
    )
}

export default Beer