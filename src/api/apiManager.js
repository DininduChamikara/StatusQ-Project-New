import { toast } from "react-toastify";
import axios from "axios";
import {store} from '../store/store'; 
import { showAlert } from "../store/reducers/alert.slice";
import { hide, show } from "../store/reducers/loader.slice";
import { useDispatch } from "react-redux";


const errorHandling = (error) => {
  const {response} = error;

  //displays the message by changing the store state.
  //refer the SnackBar components in components folder for functionality
  store.dispatch(
    showAlert({
      // message: response.data.message,
      message: response.data.error,
      isVisible: true,
      severity:"error",
    })
  );

  const errorObject = {};

  if (response && response.state === 401){
    errorObject.status = 401;
    errorObject.errorCode = error.response?.data.errorCode;
    errorObject.errorMessage = error.response?.data.errorMessage;
    errorObject.data = {};
    toast("Network Error");
  }
}

const responseHandling = (response) => {

  store.dispatch(
    showAlert({
      message: response.data.message,
      isVisible: true,
      severity:response.data.status,
    })
  )

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

  dispatchLoader(showOrHide) {
    if (showOrHide){
      store.dispatch(show());
    }else{
      store.dispatch(hide());
    }
  }

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

      this.dispatchLoader(false);

      return;
    }

    const response = await this.http
        .post(path, json)
        .then((response) => responseHandling(response))
        .catch((error) => errorHandling(error));

    this.dispatchLoader(false);

    return response;
  }

  async apiPATCH(path, id, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .patch(`${path}/${id}`, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

  async apiPutPathParam(path, body) {
    const json = JSON.stringify(body);
    const response = await this.http
      .put(path, json)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error));

    return response;
  }

  async apiDELETE(path, id) {
    const response = await this.http
      .delete(`${path}/${id}`)
      .then((response) => responseHandling(response))
      .catch((error) => errorHandling(error))

    return response;
  }
}

export default new ApiService();
