import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import {
  Container,
  CardsContainer,
  Card,
  Image,
  Input,
  Span,
  // Cart,
} from './styles';

// const CARDS_COUNT = 11;
// const MAX = 90;
// const MIN = 10;

// ? Mocking an array to render the cards
// const cards = Array(CARDS_COUNT).fill();

const Products = () => {
  // const [itemCount, setItemCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const handleCount = (e) => {
    console.log(e.target.value);
  };

  // const fetchProducts = async () => {
  //   const url = 'http://localhost:3001/products';
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   try {
  //     const result = await fetch(url, config);
  //     const resultMessage = await result.json();
  //     console.log(resultMessage);
  //     setProducts(resultMessage);
  //     setIsloading(false);
  //     return resultMessage;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3001/products';
      const config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const result = await fetch(url, config);
        const resultMessage = await result.json();
        setProducts(resultMessage);
        setIsloading(false);
        return resultMessage;
      } catch (error) {
        return error;
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <Container>
      <NavBar userRole="user" />
      <CardsContainer>
        {
          products.map(({ id, name, price, url_image: urlImage }) => (
            <Card key={ id }>
              <Span data-testid={ `customer_products__element-card-price-${id + 1}` }>
                <strong>
                  { price }
                </strong>
              </Span>
              <Image
                src={ urlImage }
                data-testid={ `customer_products__img-card-bg-image-${id + 1}` }
              />
              <div>
                <h4
                  data-testid={ `customer_products__element-card-title-${id + 1}` }
                >
                  { name }
                </h4>
                <form>
                  <Input
                    data-testid={ `customer_products__input-card-quantity-${id + 1}` }
                    type="number"
                    min="0"
                    onChange={ handleCount }
                  />
                </form>
              </div>
            </Card>
          ))
        }
      </CardsContainer>
      {/* <Cart data-testid="customer_products__checkout-bottom-value">
        <span>
          { `Ver carrinho: R$ ${Math.floor(Math.random() * MAX) + MIN}` }
        </span>
      </Cart> */}
    </Container>
  );
};

export default Products;
