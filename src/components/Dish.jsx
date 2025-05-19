function Dish ({image,title,price}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price}€</p>
        </div>
    )
}

export default Dish;