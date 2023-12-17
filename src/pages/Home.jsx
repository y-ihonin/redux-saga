import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import NewsList from "../containers/NewsList";

// helpers
import { getNews, setPopularQuery } from "../redux/actions/actionCreator";

// assets
import "../assets/styles/pages/home.scss";

function Home() {
  const latestNews = useSelector((state) => state.news.latestNews);
  const popularNews = useSelector((state) => state.news.popularNews);
  const popularQuery = useSelector((state) => state.news.popularQuery);

  const [queryForSearch, setQueryForSearch] = useState("");

  const dispatch = useDispatch();
  const { latestNewsError, popularNewsError } = useSelector(
    (state) => state.errors
  );

  const handleNews = () => {
    dispatch(getNews(queryForSearch));
    dispatch(setPopularQuery(queryForSearch));
  };

  useEffect(() => {
    setQueryForSearch(popularQuery);
  }, [popularQuery]);

  return (
    <div className="home-page" data-testid="home-page">
      <div className="home-page__wrapper">
        <div className="home-page__header">
          <h1 className="home-page__header-title">News</h1>
          <input
            className="home-page__header-input"
            type="text"
            value={queryForSearch}
            onChange={(e) => setQueryForSearch(e.target.value)}
          />
          <button className="home-page__header-button" onClick={handleNews}>
            Get news
          </button>
        </div>
        <div className="home-page__news">
          <NewsList
            title="Popular news"
            news={popularNews}
            error={popularNewsError}
          />
          <NewsList
            title={`${queryForSearch} news`}
            news={latestNews}
            error={latestNewsError}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
