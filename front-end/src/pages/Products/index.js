import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import ProductInput from './ProductsInput';
import {
  Container,
  CardsContainer,
  Card,
  Image,
  Span,
  Cart,
} from './styles';

const Products = () => {
  const animationDelay = 25;
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3001/products';
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      setIsLoading(true);
      try {
        const result = await fetch(url, config);
        const resultMessage = await result.json();
        setProducts(resultMessage);
      } catch (error) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const total = Object.values(cart)
      .reduce((subtotal, { quantity, price }) => subtotal + ((quantity * price) || 0), 0);
    setTotalPrice(total);
  };

  const redirectUser = () => {
    navigate('/customer/checkout');
  };

  if (isLoading) return <Loading />;

  return (
    <Container>
      <NavBar userRole="customer" />
      <CardsContainer>
        {
          products.map(({ id, name, price, url_image: urlImage }, i) => (
            <Card key={ id } style={ { animationDelay: `${i * animationDelay}ms` } }>
              <Span data-testid={ `customer_products__element-card-price-${id}` }>
                <strong>
                  { price.replace('.', ',') }
                </strong>
              </Span>
              <Image
                src={ urlImage }
                data-testid={ `customer_products__img-card-bg-image-${id}` }
              />
              <div>
                <h4
                  data-testid={ `customer_products__element-card-title-${id}` }
                >
                  { name }
                </h4>
                <form>
                  <ProductInput id={ id } updateCart={ updateCart } />
                </form>
              </div>
            </Card>
          ))
        }
      </CardsContainer>
      <Cart
        onClick={ redirectUser }
        data-testid="customer_products__checkout-bottom-value"
      >
        <span>
          { `Ver carrinho: R$ ${totalPrice.toFixed(2)}` }
        </span>
      </Cart>
    </Container>
  );
};

export default Products;
