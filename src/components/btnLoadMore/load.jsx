import css from "./load.module.css";
import PropTypes from "prop-types";
const BtnLoadMore = ({ hendlerIncrement }) => {
  return (
    <button className={css.btn} onClick={hendlerIncrement}>
      Load more
    </button>
  );
};
export { BtnLoadMore };
BtnLoadMore.propTypes = {
  hendlerIncrement: PropTypes.func.isRequired,
};
