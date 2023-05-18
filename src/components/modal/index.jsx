import css from "./index.module.css";
import PropTypes from "prop-types";
const Modal = ({ img, toggleModal }) => {
  return (
    <div className={css.backdrop} onClick={toggleModal}>
      <div className={css.modal}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
export { Modal };
Modal.propTypes = {
  img: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
  ]),
  toggleModal: PropTypes.func.isRequired,
};
