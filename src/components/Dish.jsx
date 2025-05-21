import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../assets/styles/dish.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Dish ({image,title,price,isNew}) {
    const { dispatch } = useContext(CartContext);
    return (
        <Col md={4} >
            <Card className="position-relative">
                <Card.Img src={image} alt={title}/>
                {isNew &&
                    <Badge bg="primary" className="position-absolute top-0 end-0 m-2">Nouveau</Badge>
                }
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}€</Card.Text>
                    <Button variant="outline-warning" onClick={() => dispatch({ type: "increment" })}>Ajouter au panier</Button>
                    <Button variant="outline-warning" onClick={() => dispatch({ type: "decrement" })}>Retirer au panier</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Dish;