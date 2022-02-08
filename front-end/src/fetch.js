const registerUser = async (data, route) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const url = `http://localhost:3001/${route}`;
  const config = {
    method: 'post',
    headers: {
      'Authorization': token,
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
