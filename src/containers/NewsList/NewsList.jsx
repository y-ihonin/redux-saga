import React from "react";
import PropTypes from "prop-types";

import "../../assets/styles/containers/news-list.scss";

const NewsList = ({ title, news, error }) => {
  return (
    <div className="news-list">
      <div className="news-list__title">{title}</div>
      {
        error && (
          <div className="news-list__error">
            {error}
          </div>
        )
      }
      <ul className="news-list__list">
        {news.map((newsItem, index) => (
          <li className="news-list__item" key={index}>
            <div className="news-list__item-title">{newsItem.title}</div>
            <div className="news-list__item-date">{newsItem.created_at}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

NewsList.propTypes = {
  title: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ).isRequired,
  error: PropTypes.string
};

export default NewsList;
