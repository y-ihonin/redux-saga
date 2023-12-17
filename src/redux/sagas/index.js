import { takeLatest, put, call, fork, all } from "@redux-saga/core/effects";
// take, takeEvery, takeLatest, takeLeading, select

import { GET_NEWS, SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handLatestNews(queryForLatestNews) {
  try {
    const { hits } = yield call(getLatestNews, queryForLatestNews);

    yield put(setLatestNews(hits));
  } catch (error) {
    yield put({ type: SET_LATEST_NEWS_ERROR, payload: `Error fetching latest news: ${error}` });
  }
}

export function* handPopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put({ type: SET_POPULAR_NEWS_ERROR, payload: `Error fetching popular news: ${error}` });
  }
}

export function* handNews(queryForLatestNews) {
  yield fork(handLatestNews, queryForLatestNews);
  yield fork(handPopularNews);
}
  
export function* watchNewsSaga() {
  yield takeLatest(GET_NEWS, function* (action) {
    yield call(handNews, action.payload);
  });
}

export default function* rootSaga() {
  // need if watch more than one action
  yield all([
    fork(watchNewsSaga),
  ]);
}
