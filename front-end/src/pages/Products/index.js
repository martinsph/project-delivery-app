import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Loading from '../../components/Loading';
import NavBar from '../../components/NavBar';
import ProductInput from './ProductsInput';
import {
  Container,
  CardsContainer,
  Card,
  Image,
  // Input,
  Span,
  Cart,
} from './styles';

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  border: 3px solid skyblue;
  border-left-color: transparent;
  border-radius: 50%;
  background: red;
  z-index: 10;
`;

const Products = () => {
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const handleQuantity = ({ target }) => {
  //   // const id = target.dataset.testid;
  //   const valueQuantity = Number(target.value);
  //   setQuantity(valueQuantity);
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
    setQuantity(1);
    fetchProducts();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <NavBar userRole="user" />
      <CardsContainer>
        {
          products.map(({ id, name, price, url_image: urlImage }) => (
            <Card key={ id }>
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
                  <ProductInput id={ id } />
                </form>
              </div>
            </Card>
          ))
        }
      </CardsContainer>
      <Cart data-testid="customer_products__checkout-bottom-value">
        <span>
          { `Ver carrinho: R$ ${quantity}` }
        </span>
      </Cart>
    </Container>
  );
};

export default Products;
