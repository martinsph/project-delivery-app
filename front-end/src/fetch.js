import axios from 'axios';

const registerUser = async (data, rota) => {
  const url = `http://localhost:3001/${rota}`;
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  try {
    const result = await axios(config);
    return result;
  } catch (error) {
    return error;
  }
};

export default registerUser;
