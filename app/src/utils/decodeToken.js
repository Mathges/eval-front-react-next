import { getCookie } from "cookies-next";
import jwt from 'jsonwebtoken';

/*
  This function is used to decode a token, but outside a component.
  It will allow me to make some Layout conditionnal render
*/

const decodeToken = () => {
  try {
    const token = getCookie('token');
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.log(error);
  }
}

export default decodeToken;
