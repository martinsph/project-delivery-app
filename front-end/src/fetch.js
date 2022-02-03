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
