import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  GET_NEWS,
  SET_POPULAR_QUERY,
} from "../constants";

export const getNews = (payload) => ({ type: GET_NEWS, payload });

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setPopularQuery = (payload) => ({
  type: SET_POPULAR_QUERY,
  payload,
});
