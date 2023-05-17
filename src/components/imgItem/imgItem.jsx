import css from "./item.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ largeImageURL, webformatURL, toggleModal }) => {
  return (
    <li className={css.list_item} onClick={() => toggleModal(largeImageURL)}>
      <img src={webformatURL} alt="img" className={css.img_item} />
    </li>
  );
};
export { ImageGalleryItem };
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
