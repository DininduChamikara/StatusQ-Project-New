import { toast } from "react-toastify";
import axios from "axios";
import { Store } from "@mui/icons-material";

const errorHandling = (error) => {
  const {response} = error;

  //displays the message by changing the store state.
  //refer the SnackBar components in components folder for functionality
  Store.dispatch(
    
  )
}

const responseHandling = (response) => {
  const reponseObject = {
    data: response.data,
    status: response.status,
  };

  if (reponseObject.status === 201) {
    toast("Successfully Created!");
  }

  return reponseObject;
};

class ApiService {
  http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    },
  });

  async apiPOST(path, body, optionalOnFailure = null) {
    const json = JSON.stringify(body);

    if (optionalOnFailure) {
      await this.http
        .post(path, json)
        .then((response) => responseHandling(response))
        .catch((error) => optionalOnFailure(error));

      return;
    }

    const response = await this.http
        .post(path, json)
        .then((response) => responseHandling(response))
        .catch((error) => {
            console.log(error)
        })

    return response;
  }

  async apiPATCH(path, id, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .patch(`${path}/${id}`, json)
      .then((response) => responseHandling(response))
      .catch((error) => {
        console.log(error)
    })

    return response;
  }

  async apiPutPathParam(path, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .put(path, json)
      .then((response) => responseHandling(response))
      .catch((error) => {
        console.log(error)
    })

    return response;
  }

  async apiDELETE(path, id) {
    const response = await this.http
      .delete(`${path}/${id}`)
      .then((response) => responseHandling(response))
      .catch((error) => {
        console.log(error)
    })

    return response;
  }
}

export default new ApiService();
