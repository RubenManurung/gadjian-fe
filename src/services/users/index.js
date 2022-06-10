import axios from "axios";
import { API } from "../../config";

export const getDataUser = (page) => {
  return (dispatch) => {
    axios
      .get(`${API}/api/?result=${page}`)
      .then((res) => {
        console.log("RESPONSE", res);
        return res.data;
      })
      .catch((error) => {
        console.log("ERORR GET DATA", error);
      });
  };
};
