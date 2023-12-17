import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

// helpers
import { getLatestNews, getPopularNews } from "../../api";
import { handLatestNews, handPopularNews } from "../../redux/sagas";
import { setLatestNews, setPopularNews } from "../../redux/actions/actionCreator";
import { SET_LATEST_NEWS_ERROR, SET_POPULAR_NEWS_ERROR } from "../../redux/constants";

// mock data
const queryForLatestNews = "react";
// end mock data

describe("handLatestNews saga", () => {
  it("should handle fetching latest news successfully", () => {
    const hits = [{ title: "React" }, { title: "React Native" }];

    return expectSaga(handLatestNews, queryForLatestNews)
      .provide([[call(getLatestNews, queryForLatestNews), { hits }]])
      .put(setLatestNews(hits))
      .run();
  });

  it("should handle fetching latest news with an error", () => {
    const error = new Error("Something went wrong");

    return expectSaga(handLatestNews, queryForLatestNews)
      .provide([[call(getLatestNews, queryForLatestNews), throwError(error)]])
      .put({ type: SET_LATEST_NEWS_ERROR, payload: `Error fetching latest news: ${error}` })
      .run();
  });
});

describe("handPopularNews saga", () => {
  it("should handle fetching popular news successfully", () => {
    const hits = [{ title: "React" }, { title: "React Native" }];

    return expectSaga(handPopularNews)
      .provide([[call(getPopularNews), { hits }]])
      .put(setPopularNews(hits))
      .run();
  });

  it("should handle fetching latest news with an error", () => {
    const error = new Error("Something went wrong");

    return expectSaga(handPopularNews)
      .provide([[call(getPopularNews), throwError(error)]])
      .put({ type: SET_POPULAR_NEWS_ERROR, payload: `Error fetching popular news: ${error}` })
      .run();
  });
});

