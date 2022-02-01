// import axios from 'axios';

const registerUser = async (data, route) => {
  const url = `http://localhost:3001/${route}`;
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
  try {
    const result = await fetch(url, config);
    const resultMessage = await result.json();
    return resultMessage;
  } catch (error) {
    return error;
  }
};

export default registerUser;

// import axios from 'axios';

// const registerUser = async (data, rota) => {
//   const url = `http://localhost:3001/${rota}`;
//   const config = {
//     method: 'post',
//     url,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data,
//   };
//   try {
//     const result = await axios(config);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error.message);
//     return error;
//   }
// };

// export default registerUser;
