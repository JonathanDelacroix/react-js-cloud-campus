import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../assets/styles/dish.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Dish ({image,title,price,isNew}) {
    
    const handleClick = (message) => {
    alert(message);
    };

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
                    <Button variant="outline-warning" onClick={() => handleClick(`Le plat ${title} est maintenant dans votre panier`)}>Ajouter au panier</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Dish;