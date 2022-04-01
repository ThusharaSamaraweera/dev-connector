import axios from "axios";

export const  HTTPS_METHODS = {
  GET : 'get',
  PUT: 'put',
  POST : 'post',
  DELETE : 'delete'
}

export const BASE_URL = 'https://dev-connector-with-mern.herokuapp.com';

export const restClient = async ({
  method,
  url,
  body = {}
}) => {
  const token = localStorage.getItem('token');

  return await axios({
    method,
    baseURL: `${BASE_URL}`,
    url,
    data: body,
    headers: {
      'x-auth-token': `${token}` ,
      'Accept': 'application/json',
    }
  }).then(
    (res) => {
      return res;
    }
  ).catch(
    (err) => {
      return err;
    }
  );
}

