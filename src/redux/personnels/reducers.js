import { PERSONNELS_DATA } from "./constant";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PERSONNELS_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
