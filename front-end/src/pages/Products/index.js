import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  // border: 1px solid;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  display: flex;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 220px;
  border: 1px solid;
  border-radius: 4px;
  overflow: hidden;

  & div {
    background-color: #EAF1EF;
    padding: 20px;
    padding-top: 10px;
    text-align: center;
  }
`;

const Image = styled.img`
  flex: 1;
`;

const Input = styled.input`
  width: 40px;
`;

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
              <Image />
              <div>
                <h4>Heineken</h4>
                <form>
                  <Input
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
