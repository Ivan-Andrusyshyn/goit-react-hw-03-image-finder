import css from "./item.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ largeImageURL, webformatURL, openModal }) => {
  return (
    <li className={css.list_item} onClick={() => openModal(largeImageURL)}>
      <img src={webformatURL} alt="img" className={css.img_item} />
    </li>
  );
};
export { ImageGalleryItem };
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
