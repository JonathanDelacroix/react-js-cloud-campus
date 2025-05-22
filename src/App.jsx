import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Dish from './components/Dish.jsx';
import { Container, Row } from 'react-bootstrap';
import './assets/styles/main.scss';
import Button from 'react-bootstrap/Button';
import {useRef, useEffect, useState,useContext } from 'react';
import useCart from "./hooks/useCart.js";

function App() {
  const { cartCount } = useCart();

  const dishes = [
    {image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg", title: "Tacos à l’unité", price: 3, isNew: true, stock: 12},
    {image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg", title: "Enchiladas", price: 12, isNew: false, stock: 0},
    {image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg", title: "Mole poblano", price: 15, isNew: false, stock: 5},
  ]

  const [showNewOnly, setNewOnly] = useState(false);

  const handleShowNewOnly = () => {
    setNewOnly(prev => !prev);
  }

  const filteredDishes = dishes.filter(dish => dish.stock > 0 && (!showNewOnly || dish.isNew));

  const prevCartCountRef = useRef(cartCount);

  useEffect(() => {
    prevCartCountRef.current = cartCount; // Stocke la valeur avant le re-render
  }, [cartCount]);

  return (
    <>
      <Header/>
      <Container as="main">
        <p>Le panier est passé de {prevCartCountRef.current} à {cartCount} articles.</p>
        <Button variant="primary" onClick={() => handleShowNewOnly()}>
          {showNewOnly ? 'Voir tous les plats' : 'Nouveautés uniquement'}
        </Button>
        <Row>
          {filteredDishes.map((dish,index) =>(
              <Dish
                key={index}
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