import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Dish from './components/Dish.jsx';
import { Container, Row } from 'react-bootstrap';
import './assets/styles/main.scss';

function App() {

  const dishes = [
    {image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", title: "Tacos à l’unité", price: 3, isNew: true},
    {image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", title: "Enchiladas", price: 12, isNew: false},
    {image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", title: "Mole poblano", price: 15, isNew: false}
  ]
  return (
    <>
      <Header />

        <Container as="main">
          <Row>
            {dishes.map(dish =>(
              <Dish
                key={dish.index}
                image={dish.image}
                title={dish.title}
                price={dish.price}
                isNew={dish.isNew}
              />
            ))}
          </Row>
        </Container>

      <Footer />
    </>
  )
}

export default App