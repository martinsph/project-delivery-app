import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
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

const Products = () => {
  const [quantity, setQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsloading] = useState(true);

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
                  {/* <Input
                    data-testid={ `customer_products__input-card-quantity-${id}` }
                    type="number"
                    min="1"
                    onChange={ handleQuantity }
                  /> */}
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
