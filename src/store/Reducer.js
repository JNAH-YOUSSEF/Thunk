import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types";


const initialState = {
  products: [],
  loading: false,
  error: null,
};

const Reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };

    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default Reducer;
