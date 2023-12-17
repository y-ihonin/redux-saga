import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_POPULAR_QUERY,
} from "../constants";

const initialState = {
  latestNews: [],
  popularNews: [],
  popularQuery: "",
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: payload,
      };
    case SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: payload,
      };
    case SET_POPULAR_QUERY:
      return {
        ...state,
        popularQuery: payload,
      };
    default:
      return state;
  }
};

export default news;
