import axios from 'axios';

const API_KEY = process.env.FIREBASE_API_KEY;

const createUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
};

export default createUser;
