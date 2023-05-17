import css from "./load.module.css";
import PropTypes from "prop-types";
const BtnLoadMore = ({ hendlerIncrement, fetchImg, loading }) => {
  if (fetchImg.length > 0) {
    return !loading ? (
      <button className={css.btn} onClick={hendlerIncrement}>
        Load more
      </button>
    ) : (
      ""
    );
  }
};
export { BtnLoadMore };
BtnLoadMore.propTypes = {
  fetchImg: PropTypes.array.isRequired,
  hendlerIncrement: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
