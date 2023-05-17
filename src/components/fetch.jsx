import axios from "axios";
import PropTypes from "prop-types";
async function fetchImgWithQuery(search, countPage) {
  const url = "https://pixabay.com/api/";
  const key = "34935092-5b4eb05fd698af8ffa5b7be77";
  const info = await axios.get(`${url}?key=${key}`, {
    params: {
      q: search,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: countPage,
      per_page: 12,
    },
  });
  return info.data.hits;
}
export const ApiImg = { fetchImgWithQuery };
fetchImgWithQuery.propTypes = {
  search: PropTypes.string.isRequired,
  countPage: PropTypes.number.isRequired,
};
