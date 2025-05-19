function Dish ({image,titre,prix}) {
    return (
        <div>
            <img src={image} alt={titre} />
            <h3>{titre}</h3>
            <p>{prix}€</p>
        </div>
    )
}

export default Dish;