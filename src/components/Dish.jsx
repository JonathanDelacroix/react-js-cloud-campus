import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../assets/styles/dish.scss';

function Dish ({image,title,price}) {
    return (
        <Col>
            <Card>
                <Card.Img src={image} alt={title} className="dishImage"/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {price}€
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Dish;