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
    console.log(data);
    const result = await axios(config);
    console.log(result);
    return result;
  } catch (error) {
    return console.log(error);
  }
};

export default registerUser;
