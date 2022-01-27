import React from 'react';
import NavBar from '../../components/NavBar';
import {
  Container,
  CardsContainer,
  Card,
  Image,
  Input,
  Span,
} from './styles';

const CARDS_COUNT = 11;

const cards = Array(CARDS_COUNT).fill();

const Products = () => {
  // const [itemCount, setItemCount] = useState(0);

  const handleCount = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <NavBar />
      <CardsContainer>
        {
          cards.map((_, i) => (
            <Card key={ i }>
              <Span data-testid={ `customer_products__element-card-price-${i + 1}` }>
                <strong>
                  R$5,
                  {Math.floor(Math.random() * 100)}
                </strong>
              </Span>
              <Image data-testid={ `customer_products__img-card-bg-image-${i + 1}` } />
              <div>
                <h4
                  data-testid={ `customer_products__element-card-title-${i + 1}` }
                >
                  Heineken
                </h4>
                <form>
                  <Input
                    data-testid={ `customer_products__input-card-quantity-${i + 1}` }
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
    </Container>
  );
};

export default Products;
