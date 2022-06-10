import axios from "axios";
import { API } from "../../config";
import { PERSONNELS_DATA } from "./constant";

export const startFetchingPersonnels = (data) => {
  return {
    type: PERSONNELS_DATA,
    payload: data,
  };
};

const getDataPersonnels = (result) => {
  return async (dispatch) => {
    await axios
      .get(`${API}/api/?results=${result}`)
      .then((res) => {
        dispatch(startFetchingPersonnels(res.data));
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert(error);
      });
  };
};

const actionLog = {
  getDataPersonnels,
};

export default actionLog;
