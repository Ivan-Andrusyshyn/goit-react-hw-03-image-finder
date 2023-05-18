import css from "./index.module.css";
import PropTypes from "prop-types";
const Modal = ({ img, closeModal }) => {
  return (
    <div className={css.backdrop} onClick={closeModal}>
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
  closeModal: PropTypes.func.isRequired,
};
