import css from "./listItem.module.css";
import { ImageGalleryItem } from "components/imgItem/imgItem";
import PropTypes from "prop-types";
const ImageGallery = ({ fetchImg, openModal }) => {
  return (
    <ul className={css.list_img}>
      {fetchImg.map(({ id, largeImageURL, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            openModal={openModal}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
          />
        );
      })}
    </ul>
  );
};
export { ImageGallery };
ImageGallery.propTypes = {
  fetchImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
