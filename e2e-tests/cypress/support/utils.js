export const createUniqueCredentials = () => {
  const dateInMilliseconds = Date.now().toString();

  return {
    email: `testemail-${dateInMilliseconds}@test.fi`,
    username: `testusername-${dateInMilliseconds}`,
    password: 'password123',
  };
};
