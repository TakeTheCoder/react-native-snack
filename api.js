const API_URL = "https://jquery-test-api-auth.herokuapp.com";
import { AsyncStorage } from 'react-native'

const apiFetch = (path = "", method = "GET", data) => {
  let options = {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };

  return AsyncStorage.getItem('userToken').then(token => {
    console.log(token)
    if (token) { options.headers["Authentication"] = `Bearer ${token}` }
    if (data && Object.keys(data).length) options["body"] = JSON.stringify(data);

    return fetch(`${API_URL}${path}`, options).then(resp => {
      return resp;
      // return resp.text().then(text => {
      //   return text ? JSON.parse(text) : {};
      // });
    });
  })

};

export default apiFetch;