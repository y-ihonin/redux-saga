export const getLatestNews = async (searchQuery) => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10`
  );

  return request.json();
};

export const getPopularNews = async () => {
  const request = await fetch("https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10");
  // const request = await fetch("https://h1n.algolia.com/api/v1/search?query=&hitsPerPage=10"); // with error

  return request.json();
};
