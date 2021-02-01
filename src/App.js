import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faCalculator } from '@fortawesome/free-solid-svg-icons';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: 'Яблоко',
      cost: '$10'
    },
    {
      name: 'Банан',
      cost: '$8'
    },
    {
      name: 'Папайя',
      cost: '$10'
    }
  ]);
  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  }
  const removeFromCart = (productToRemove) =>{
    setCart(cart.filter(product => product !== productToRemove))
  }
  const navigateTo = (nextPage) =>{
    setPage(nextPage);
  }

const renderProducts = () => (<>
  <h1>Продукты</h1>
  <div>
    {products.map((product) => (
      <div>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <button onClick={() => addToCart(product)}>Корзина</button>
      </div>
    ))}
  </div>
  </>)
const renderCart = () => (<>
  <h1>Корзина</h1>
  <div>
    {cart.map((product) => (
      <div>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <button onClick={() => removeFromCart(product)}>Удалять</button>
    
      </div>
    ))}
  </div>
  </>)
  return (
    <div>
      <header>
        <button onClick={()=> navigateTo(PAGE_CART)}>Корзина ({cart.length})</button>
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>Посмотреть продукты</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
  <span>Всего: 0</span>
      </div>
      );
}
export default App;
