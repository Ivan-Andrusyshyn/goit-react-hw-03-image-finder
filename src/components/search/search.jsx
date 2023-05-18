import css from "./search.module.css";
import PropTypes from "prop-types";
const Searchbar = ({ hendlerSearch }) => {
  return (
    <header>
      <form className={css.form} onSubmit={hendlerSearch}>
        <button className={css.search_btn} type="submit">
          <span>Search</span>
        </button>

        <input
          className={css.search_input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export { Searchbar };
Searchbar.propTypes = {
  hendlerSearch: PropTypes.func.isRequired,
};
