import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../assets/styles/dish.scss';
import Badge from 'react-bootstrap/Badge';

function Dish ({image,title,price, isNew}) {
    return (
        <Col md={4}>
            <Card className="position-relative">
                <Card.Img src={image} alt={title}/>
                {isNew &&
                    <Badge bg="primary" className="position-absolute top-0 end-0 m-2">Nouveau</Badge>
                }
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