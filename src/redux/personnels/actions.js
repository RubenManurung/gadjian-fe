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
    // console.log("PAGE", page);
    // console.log("RESULT", result);
    await axios
      .get(`${API}/api/?results=${result}`)
      .then((res) => {
        // console.log("RESSSS", res);
        // if (res.status === 200) {
        dispatch(startFetchingPersonnels(res.data));
        // }
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
